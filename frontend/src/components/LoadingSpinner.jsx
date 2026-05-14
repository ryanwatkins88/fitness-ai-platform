export default function LoadingSpinner({ message = 'Generating...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-brand-900 border-t-brand-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-brand-600/20" />
        </div>
      </div>
      <p className="text-gray-400 text-sm animate-pulse">{message}</p>
    </div>
  )
}
