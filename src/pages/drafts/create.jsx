import GovAppShell from '@/layout/GovAppShell'

export default function Dashboard() {
  return (
    <>
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Drafts - create</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Replace with your content */}
          <div className="py-4">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
        </div>
      </div>
    </>
  )
}

Dashboard.getLayout = function getLayout(page){
  return (
    <GovAppShell>
      {page}
    </GovAppShell>
  )
}