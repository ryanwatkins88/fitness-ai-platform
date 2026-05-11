/* ===== STATE ===== */
const state = {
  profile: {},
  script: [],
  currentStep: 1,
  conversationHistory: [],
};

/* ===== UTILS ===== */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function show(el) { el && el.classList.remove('hidden'); }
function hide(el) { el && el.classList.add('hidden'); }

async function apiFetch(url, method = 'GET', body = null) {
  const opts = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  return res.json();
}

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = orig; }, 2000);
  });
}

/* ===== TAB SWITCHING ===== */
$$('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.tab-btn').forEach(b => b.classList.remove('active'));
    $$('.tab-content').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    $(`#tab-${btn.dataset.tab}`).classList.add('active');
  });
});

/* ===== PROFILE ===== */
function getProfileFromForm() {
  return {
    name: $('#f-name').value.trim(),
    niche: $('#f-niche').value.trim(),
    target_clientele: $('#f-target').value.trim(),
    age_range: $('#f-age').value.trim(),
    gender: $('#f-gender').value,
    pain_points: $('#f-pain').value.trim(),
    client_goals: $('#f-goals').value.trim(),
    lead_magnet: $('#f-magnet').value.trim(),
    coaching_style: $('#f-style').value.trim(),
  };
}

function fillProfileForm(profile) {
  if (!profile || !Object.keys(profile).length) return;
  $('#f-name').value = profile.name || '';
  $('#f-niche').value = profile.niche || '';
  $('#f-target').value = profile.target_clientele || '';
  $('#f-age').value = profile.age_range || '';
  $('#f-gender').value = profile.gender || '';
  $('#f-pain').value = profile.pain_points || '';
  $('#f-goals').value = profile.client_goals || '';
  $('#f-magnet').value = profile.lead_magnet || '';
  $('#f-style').value = profile.coaching_style || '';
}

async function loadProfile() {
  const data = await apiFetch('/api/profile');
  if (data && Object.keys(data).length) {
    state.profile = data;
    fillProfileForm(data);
  }
}

$('#profile-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const profile = getProfileFromForm();
  state.profile = profile;
  const btn = $('#profile-form .btn-primary');
  btn.disabled = true;
  btn.textContent = 'Saving...';

  await apiFetch('/api/profile', 'POST', profile);

  btn.disabled = false;
  btn.textContent = 'Save Profile';
  const indicator = $('#profile-saved');
  show(indicator);
  setTimeout(() => hide(indicator), 3000);
});

/* ===== GROUP FINDER ===== */
function buildGroupCard(group, platform) {
  const card = document.createElement('div');
  card.className = 'group-card';

  let innerHtml = `<div class="group-card-title">${group.category}</div>`;

  // Search terms chips
  if (group.search_terms?.length) {
    innerHtml += `<div class="search-terms">
      ${group.search_terms.map(t => `<span class="search-term">🔍 ${t}</span>`).join('')}
    </div>`;
  }

  if (platform === 'facebook') {
    if (group.example_group_names?.length) {
      innerHtml += `<div class="example-names">
        ${group.example_group_names.map(n => `<div class="example-name">${n}</div>`).join('')}
      </div>`;
    }
    innerHtml += `<div class="group-meta">
      <div class="group-meta-item"><strong>Why your clients are here</strong>${group.why_relevant || ''}</div>
      <div class="group-meta-item"><strong>How to engage</strong>${group.how_to_engage || ''}</div>
      <div class="group-meta-item"><strong>Watch out for</strong>${group.what_to_avoid || ''}</div>
    </div>`;
  } else {
    if (group.hashtags?.length) {
      innerHtml += `<div class="hashtags">
        ${group.hashtags.map(h => `<span class="hashtag">${h}</span>`).join('')}
      </div>`;
    }
    if (group.account_types_to_follow?.length) {
      innerHtml += `<div class="group-meta-item" style="margin-bottom:10px">
        <strong>Accounts to follow</strong>${group.account_types_to_follow.join(', ')}
      </div>`;
    }
    innerHtml += `<div class="group-meta">
      <div class="group-meta-item"><strong>Why your clients are here</strong>${group.why_relevant || ''}</div>
      <div class="group-meta-item"><strong>Content hook</strong>${group.content_hook || ''}</div>
    </div>`;
  }

  card.innerHTML = innerHtml;
  return card;
}

$('#find-groups-btn').addEventListener('click', async () => {
  const profile = getProfileFromForm();
  if (!profile.niche && !profile.target_clientele) {
    show($('#groups-no-profile'));
    return;
  }
  hide($('#groups-no-profile'));
  hide($('#groups-results'));
  show($('#groups-loading'));

  const data = await apiFetch('/api/find-groups', 'POST', { profile });

  hide($('#groups-loading'));

  if (!data.success) {
    alert(`Error: ${data.error}`);
    return;
  }

  const { recommendations } = data;

  // Facebook groups
  const fbList = $('#facebook-groups-list');
  fbList.innerHTML = '';
  (recommendations.facebook_groups || []).forEach(g => {
    fbList.appendChild(buildGroupCard(g, 'facebook'));
  });

  // Threads
  const threadsList = $('#threads-list');
  threadsList.innerHTML = '';
  (recommendations.threads_communities || []).forEach(g => {
    threadsList.appendChild(buildGroupCard(g, 'threads'));
  });

  // Pro tips
  const tipsList = $('#pro-tips-list');
  tipsList.innerHTML = '';
  (recommendations.pro_tips || []).forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  show($('#groups-results'));
});

/* ===== DM SCRIPT ===== */
async function loadScript() {
  const data = await apiFetch('/api/script');
  state.script = data.steps || [];
  renderScriptSteps();
  updateStepBanner();
}

function renderScriptSteps() {
  const list = $('#script-steps-list');
  list.innerHTML = '';

  state.script.forEach((step, i) => {
    const item = document.createElement('div');
    item.className = `script-step-item${step.id === state.currentStep ? ' active' : ''}${step.id < state.currentStep ? ' done' : ''}`;
    item.dataset.stepId = step.id;
    item.innerHTML = `
      <div class="step-num">${step.id < state.currentStep ? '✓' : step.id}</div>
      <div class="step-label">${step.label}</div>
    `;
    item.addEventListener('click', () => {
      state.currentStep = step.id;
      renderScriptSteps();
      updateStepBanner();
    });
    list.appendChild(item);
  });
}

function updateStepBanner() {
  const step = state.script.find(s => s.id === state.currentStep);
  if (step) {
    $('#current-step-banner').textContent = `Step ${step.id} — ${step.label}`;
  }
}

function renderConversation() {
  const histEl = $('#conversation-history');
  if (!state.conversationHistory.length) {
    histEl.innerHTML = '<div class="convo-empty"><p>Your conversation will appear here as you work through the steps.</p></div>';
    return;
  }
  histEl.innerHTML = state.conversationHistory.map(msg => `
    <div class="convo-msg ${msg.role}">
      <div class="convo-msg-label">${msg.role === 'coach' ? 'You (Coach)' : 'Prospect'}</div>
      <div class="convo-msg-text">${msg.content}</div>
    </div>
  `).join('');
  histEl.scrollTop = histEl.scrollHeight;
}

$('#get-response-btn').addEventListener('click', async () => {
  const prospectMsg = $('#prospect-input').value.trim();
  if (!prospectMsg) return;

  const profile = state.profile;

  const btn = $('#get-response-btn');
  btn.disabled = true;
  btn.textContent = 'Thinking...';
  hide($('#response-card'));

  // Add prospect message to history
  state.conversationHistory.push({ role: 'prospect', content: prospectMsg });
  renderConversation();

  const data = await apiFetch('/api/script-response', 'POST', {
    profile,
    conversation_history: state.conversationHistory,
    current_step: state.currentStep,
    prospect_message: prospectMsg,
  });

  btn.disabled = false;
  btn.textContent = 'Get Best Response →';
  $('#prospect-input').value = '';

  if (!data.success) {
    alert(`Error: ${data.error}`);
    // Remove optimistically added message on error
    state.conversationHistory.pop();
    renderConversation();
    return;
  }

  const { suggestion } = data;

  // Fill response card
  $('#response-text').textContent = suggestion.suggested_response || '';
  $('#response-why').textContent = suggestion.why_it_works || '';
  $('#response-listen').textContent = suggestion.listen_for || '';
  $('#response-alt').textContent = suggestion.alternative_response || '';

  // Show next step button if ready
  const nextStepBtn = $('#next-step-btn');
  if (suggestion.ready_for_next && suggestion.next_step_id && suggestion.next_step_id !== state.currentStep) {
    show(nextStepBtn);
    nextStepBtn.onclick = () => {
      state.currentStep = suggestion.next_step_id;
      renderScriptSteps();
      updateStepBanner();
      hide(nextStepBtn);
    };
  } else {
    hide(nextStepBtn);
  }

  show($('#response-card'));
});

// Copy main response
$('#copy-response-btn').addEventListener('click', () => {
  copyToClipboard($('#response-text').textContent, $('#copy-response-btn'));
});

// Copy alt response
$('#copy-alt-btn').addEventListener('click', () => {
  copyToClipboard($('#response-alt').textContent, $('#copy-alt-btn'));
});

// Use response — add to conversation history
$('#use-response-btn').addEventListener('click', () => {
  const text = $('#response-text').textContent;
  if (!text) return;
  state.conversationHistory.push({ role: 'coach', content: text });
  renderConversation();
  hide($('#response-card'));
});

/* ===== INIT ===== */
(async () => {
  await loadProfile();
  await loadScript();
})();
