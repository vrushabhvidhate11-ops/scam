import { SectionHeading } from '../components/section-heading'
import { PlanCard } from '../components/plan-card'

const plans = [
  {
    name: 'Starter',
    price: '$12',
    description: 'For solo creators and quick edits',
    features: ['Unlimited exports', 'AI caption generator', 'Basic templates', '720p output']
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For creators who need premium tools',
    features: ['4K export', 'Smart templates', 'Background removal', 'Advanced filters']
  },
  {
    name: 'Team',
    price: '$79',
    description: 'For agencies and video teams',
    features: ['Multi-seat access', 'Brand kits', 'Priority support', 'Cloud projects']
  }
]

export default function PricingPage() {
  return (
    <main className="min-h-screen px-6 py-10 lg:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Pricing" description="Select the plan that fits your editing needs." />
        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </main>
  )
}
