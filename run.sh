#!/bin/bash
# Copy .env.example to .env and add your ANTHROPIC_API_KEY if not already done
if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env — add your ANTHROPIC_API_KEY to it before running."
  exit 1
fi

python app.py
