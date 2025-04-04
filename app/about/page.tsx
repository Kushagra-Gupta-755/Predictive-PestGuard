import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaChartLine, FaRobot, FaCloudSunRain } from "react-icons/fa"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lush-rice-paddy-field-neat-260nw-2499404003.jpg-S4wTCR3ERo0JqMsVGtoOWOHXFtnylE.jpeg"
        alt="Lush green rice paddy field"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <section className="container mx-auto py-12 relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">About Predictive PestGuard</h1>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8">
            Predictive Pest Outbreak Monitoring is an AI-powered platform that helps farmers and researchers predict
            pest outbreaks using weather data and historical patterns. Our mission is to protect crop yields and
            increase farm profitability through science-based pest tracking and forecasting.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaCloudSunRain className="mr-2" />
                  Weather-based Predictions
                </CardTitle>
              </CardHeader>
              <CardContent>Real-time pest predictions based on current and forecasted weather conditions.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaChartLine className="mr-2" />
                  Interactive Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>Visualize pest data and trends with our intuitive, interactive dashboard.</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaRobot className="mr-2" />
                  AI-driven Risk Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                Advanced AI algorithms assess and predict the risk of pest outbreaks in your area.
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-8">
            Our team consists of experienced agronomists, data scientists, and software engineers dedicated to
            revolutionizing pest management in agriculture. We're committed to providing farmers with the tools they
            need to make informed decisions and protect their crops.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            Have questions or want to learn more? Reach out to us at{" "}
            <a href="mailto:info@pestguard.com" className="text-blue-500 hover:underline">
              info@pestguard.com
            </a>
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="https://twitter.com/pestguard">Twitter</Link>
            </Button>
            <Button asChild>
              <Link href="https://linkedin.com/company/pestguard">LinkedIn</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

