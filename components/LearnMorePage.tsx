import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-[#F8DEB9]">
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Learn More About Pest Outbreaks</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-lg">
            Pest outbreaks can significantly impact agriculture, leading to lower yields and economic losses. This page
            provides insights into causes, prevention, and mitigation strategies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Common Pests & Their Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Fall Armyworm", crop: "Maize", region: "Africa, Asia", severity: "High" },
              { name: "Desert Locust", crop: "Various", region: "Africa, Middle East", severity: "Critical" },
              { name: "Rice Blast", crop: "Rice", region: "Global", severity: "Medium" },
            ].map((pest) => (
              <Card key={pest.name}>
                <CardHeader>
                  <CardTitle>{pest.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`/placeholder.svg?text=${pest.name}`}
                    alt={pest.name}
                    width={300}
                    height={200}
                    className="mb-4 rounded-md"
                  />
                  <p>
                    <strong>Affected Crop:</strong> {pest.crop}
                  </p>
                  <p>
                    <strong>Region:</strong> {pest.region}
                  </p>
                  <p>
                    <strong>Severity:</strong> {pest.severity}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Prevention & Control Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Organic Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Crop rotation</li>
                  <li>Biological control (natural predators)</li>
                  <li>Pheromone traps</li>
                  <li>Companion planting</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Chemical Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  <li>Insecticides</li>
                  <li>Fungicides</li>
                  <li>Herbicides</li>
                  <li>Growth regulators</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">AI-powered Prediction Techniques</h3>
            <p>
              Our platform uses advanced AI algorithms to predict pest outbreaks based on weather patterns, historical
              data, and current pest populations. This allows farmers to take proactive measures and minimize crop
              damage.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Interactive FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How can AI help in predicting pest outbreaks?</AccordionTrigger>
              <AccordionContent>
                AI can analyze vast amounts of data, including weather patterns, historical pest occurrences, and crop
                health indicators, to predict potential pest outbreaks with high accuracy. This allows farmers to take
                preventive measures before an outbreak occurs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What are the signs of a pest infestation?</AccordionTrigger>
              <AccordionContent>
                Common signs include visible damage to plants, such as holes in leaves, discoloration, wilting, or
                stunted growth. You may also notice the presence of insects, eggs, or larvae on plants.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How often should I monitor my crops for pests?</AccordionTrigger>
              <AccordionContent>
                Regular monitoring is crucial. It's recommended to inspect your crops at least once a week, and more
                frequently during peak pest seasons or when environmental conditions are favorable for pest growth.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Take Action</h2>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button variant="outline">Download Sample Report (PDF)</Button>
          </div>
        </section>
      </main>
    </div>
  )
}

