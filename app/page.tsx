import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Globe,
  Code,
  Users,
  User,
  Briefcase,
  Package,
  DiscIcon as Discord,
  Palette,
  Star,
  Wrench,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-fuchsia-950 text-white">
      {/* Navigation Bar - will be modified via JavaScript */}
      <nav id="dynamic-navbar" className="sticky top-0 z-50 backdrop-blur-lg bg-black/30 border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center">
              <span className="font-bold text-xl">AA</span>
            </div>
            <span className="font-bold text-xl">AlonsoAliaga Development</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#plugins" className="hover:text-fuchsia-400 transition">
              Plugins
            </Link>
            <Link href="#designs" className="hover:text-fuchsia-400 transition">
              Designs
            </Link>
            <Link href="#about" className="hover:text-fuchsia-400 transition">
              About Me
            </Link>
            <Link href="#staff" className="hover:text-fuchsia-400 transition">
              Staff
            </Link>
            <Link href="#languages" className="hover:text-fuchsia-400 transition">
              Languages
            </Link>
            <Link href="#services" className="hover:text-fuchsia-400 transition">
              Services
            </Link>
            <Link href="#plans" className="hover:text-fuchsia-400 transition">
              Plans
            </Link>
            <Link href="#reviews" className="hover:text-fuchsia-400 transition">
              Reviews
            </Link>
            <Link href="#faq" className="hover:text-fuchsia-400 transition">
              FAQ
            </Link>
            <Link href="#tools" className="hover:text-fuchsia-400 transition">
              Tools
            </Link>
          </div>
          <div id="api-links" className="flex items-center space-x-4">
            {/* API links will be added here via JavaScript */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-pulse"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-white rounded-full top-1/3 left-1/2 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-1/3 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-1 h-1 bg-white rounded-full top-2/3 left-1/4 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute w-2 h-2 bg-white rounded-full top-3/4 left-1/2 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          {/* More stars can be added */}
        </div>
        <div className="container mx-auto flex flex-col items-center text-center z-10 relative">
          <div className="w-40 h-40 mb-8 relative">
            <Image
              src="/placeholder.svg?height=160&width=160"
              alt="AlonsoAliaga Development Logo"
              width={160}
              height={160}
              className="rounded-full border-4 border-fuchsia-500 shadow-lg shadow-purple-500/50"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-400">
            AlonsoAliaga Development
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-purple-100">
            Elevate your Minecraft server with our cosmic collection of premium plugins
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none">
              Explore Plugins
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-100 hover:bg-purple-900/30">
              <Discord className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              About Me
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
            <div className="w-48 h-48 relative flex-shrink-0">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Alonso Aliaga"
                width={192}
                height={192}
                className="rounded-full border-4 border-fuchsia-500 shadow-lg shadow-purple-500/50"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Alonso Aliaga</h3>
              <p className="text-lg text-gray-200">
                I'm a passionate Minecraft plugin developer dedicated to creating high-quality, innovative solutions for
                server owners.
              </p>
              <p className="text-gray-300">
                With years of experience in Java development, I specialize in crafting plugins that enhance gameplay and
                server management. Beyond Minecraft, I also develop Discord bots to help communities stay connected and
                engaged.
              </p>
              <p className="text-gray-300">
                I'm planning to create YouTube content focused on development tutorials, helping others learn how to
                create their own plugins and bots. My goal is to share knowledge and empower the next generation of
                developers in the Minecraft community.
              </p>
              <div className="flex space-x-4 pt-2">
                <Link href="#" className="text-purple-400 hover:text-fuchsia-400 transition flex items-center">
                  <Discord className="h-5 w-5 mr-2" />
                  Discord
                </Link>
                <Link href="#" className="text-purple-400 hover:text-fuchsia-400 transition flex items-center">
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Link>
                <Link href="#" className="text-purple-400 hover:text-fuchsia-400 transition flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Website
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plugins Section with Filtering */}
      <section id="plugins" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              My Minecraft Plugins
            </span>
          </h2>

          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-gray-900/60 p-1">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="free">FREE</TabsTrigger>
              <TabsTrigger value="premium">PREMIUM</TabsTrigger>
              <TabsTrigger value="alonso-series">ALONSO SERIES</TabsTrigger>
              <TabsTrigger value="better-series">BETTER SERIES</TabsTrigger>
              <TabsTrigger value="others">OTHERS</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Plugin 1 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Package className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">GalaxyEconomy</h3>
                          <Badge className="bg-green-600 hover:bg-green-700">FREE</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Advanced economy system with multiple currencies and shop integration.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Plugin 2 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Users className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">AlonsoFactions</h3>
                          <Badge className="bg-purple-600 hover:bg-purple-700">ALONSO SERIES</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Create and manage factions with custom permissions and territory control.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Plugin 3 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Code className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">BetterQuests</h3>
                          <Badge className="bg-blue-600 hover:bg-blue-700">BETTER SERIES</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Dynamic quest system with custom rewards and progression tracking.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Plugin 4 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Package className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">PremiumVaults</h3>
                          <Badge className="bg-amber-600 hover:bg-amber-700">PREMIUM</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Advanced player vaults with multiple pages and permission-based access.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Plugin 5 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Package className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">ServerUtilities</h3>
                          <Badge className="bg-gray-600 hover:bg-gray-700">OTHERS</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Essential utilities for server management and administration.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Plugin 6 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Package className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">AlonsoChat</h3>
                          <Badge className="bg-purple-600 hover:bg-purple-700">ALONSO SERIES</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Advanced chat management with channels, formatting, and moderation tools.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="free" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Free Plugin 1 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Package className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">GalaxyEconomy</h3>
                          <Badge className="bg-green-600 hover:bg-green-700">FREE</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Advanced economy system with multiple currencies and shop integration.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="premium" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Premium Plugin 1 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Package className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">PremiumVaults</h3>
                          <Badge className="bg-amber-600 hover:bg-amber-700">PREMIUM</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Advanced player vaults with multiple pages and permission-based access.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="alonso-series" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Alonso Series Plugin 1 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Users className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">AlonsoFactions</h3>
                          <Badge className="bg-purple-600 hover:bg-purple-700">ALONSO SERIES</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Create and manage factions with custom permissions and territory control.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Alonso Series Plugin 2 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Package className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">AlonsoChat</h3>
                          <Badge className="bg-purple-600 hover:bg-purple-700">ALONSO SERIES</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Advanced chat management with channels, formatting, and moderation tools.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="better-series" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Better Series Plugin 1 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Code className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">BetterQuests</h3>
                          <Badge className="bg-blue-600 hover:bg-blue-700">BETTER SERIES</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Dynamic quest system with custom rewards and progression tracking.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="others" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Other Plugin 1 */}
                <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center">
                        <Package className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">ServerUtilities</h3>
                          <Badge className="bg-gray-600 hover:bg-gray-700">OTHERS</Badge>
                        </div>
                        <p className="text-gray-300 text-sm mb-3">
                          Essential utilities for server management and administration.
                        </p>
                        <div className="flex space-x-2">
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Globe className="h-3 w-3 mr-1" />
                            Website
                          </Link>
                          <Link href="#" className="text-xs text-purple-400 hover:text-fuchsia-400 flex items-center">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AlonsoAliaga Designs Section */}
      <section id="designs" className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              AlonsoAliaga Designs
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden border-4 border-fuchsia-500/50 shadow-lg shadow-purple-500/30">
                <Image
                  src="/images/alonsoaliagadesigns.png"
                  alt="AlonsoAliaga Designs"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">Premium Textures & Icons</h3>
              <p className="text-lg text-gray-200">
                Elevate your Minecraft server's visual identity with our custom textures and icon packs.
              </p>
              <p className="text-gray-300">
                AlonsoAliaga Designs offers high-quality texture packs, rank icons, and UI elements that will make your
                server stand out from the crowd. Each design is crafted with attention to detail and optimized for
                performance.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gray-900/60 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-bold mb-2">Rank Icons</h4>
                  <p className="text-sm text-gray-300">Custom rank icons for your permission system</p>
                </div>
                <div className="bg-gray-900/60 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-bold mb-2">UI Elements</h4>
                  <p className="text-sm text-gray-300">Beautiful interface components for menus and GUIs</p>
                </div>
                <div className="bg-gray-900/60 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-bold mb-2">Item Textures</h4>
                  <p className="text-sm text-gray-300">Custom textures for special items and weapons</p>
                </div>
                <div className="bg-gray-900/60 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="font-bold mb-2">Logo Design</h4>
                  <p className="text-sm text-gray-300">Professional logos for your server brand</p>
                </div>
              </div>
              <Button className="mt-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
                <Palette className="mr-2 h-5 w-5" />
                Explore Designs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Members Section */}
      <section id="staff" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Staff Members
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Staff Member 1 */}
            <div className="bg-gray-900/40 rounded-xl p-6 border border-purple-500/20 hover:border-fuchsia-500/30 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Staff Member"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Alonso Aliaga</h3>
                <p className="text-fuchsia-400 mb-3">Lead Developer</p>
                <p className="text-gray-300 text-sm">
                  Minecraft plugin developer with 5+ years of experience in Java and Spigot API.
                </p>
              </div>
            </div>

            {/* Staff Member 2 */}
            <div className="bg-gray-900/40 rounded-xl p-6 border border-purple-500/20 hover:border-fuchsia-500/30 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Staff Member"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Sam Nebula</h3>
                <p className="text-fuchsia-400 mb-3">Support Manager</p>
                <p className="text-gray-300 text-sm">
                  Handles customer support and community management for all plugins.
                </p>
              </div>
            </div>

            {/* Staff Member 3 */}
            <div className="bg-gray-900/40 rounded-xl p-6 border border-purple-500/20 hover:border-fuchsia-500/30 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Staff Member"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Jamie Comet</h3>
                <p className="text-fuchsia-400 mb-3">UI/UX Designer</p>
                <p className="text-gray-300 text-sm">
                  Creates beautiful interfaces for plugin configuration and in-game menus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Languages I Know
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {/* Language 1 */}
            <div className="bg-gray-900/40 rounded-xl p-4 border border-purple-500/20 hover:border-fuchsia-500/30 transition-all flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mb-3">
                <span className="font-bold text-2xl">J</span>
              </div>
              <h3 className="font-bold">Java</h3>
              <p className="text-sm text-gray-300 text-center mt-1">Advanced</p>
            </div>

            {/* Language 2 */}
            <div className="bg-gray-900/40 rounded-xl p-4 border border-purple-500/20 hover:border-fuchsia-500/30 transition-all flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mb-3">
                <span className="font-bold text-2xl">JS</span>
              </div>
              <h3 className="font-bold">JavaScript</h3>
              <p className="text-sm text-gray-300 text-center mt-1">Intermediate</p>
            </div>

            {/* Language 3 */}
            <div className="bg-gray-900/40 rounded-xl p-4 border border-purple-500/20 hover:border-fuchsia-500/30 transition-all flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mb-3">
                <span className="font-bold text-2xl">PY</span>
              </div>
              <h3 className="font-bold">Python</h3>
              <p className="text-sm text-gray-300 text-center mt-1">Intermediate</p>
            </div>

            {/* Language 4 */}
            <div className="bg-gray-900/40 rounded-xl p-4 border border-purple-500/20 hover:border-fuchsia-500/30 transition-all flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mb-3">
                <span className="font-bold text-2xl">KT</span>
              </div>
              <h3 className="font-bold">Kotlin</h3>
              <p className="text-sm text-gray-300 text-center mt-1">Beginner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Services
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Custom Plugin Development</h3>
                <p className="text-gray-300 mb-4">
                  Get a tailor-made plugin for your Minecraft server with exactly the features you need.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-300 text-sm">✓ Custom features and functionality</li>
                  <li className="text-gray-300 text-sm">✓ Integration with existing plugins</li>
                  <li className="text-gray-300 text-sm">✓ Optimized performance</li>
                  <li className="text-gray-300 text-sm">✓ Detailed documentation</li>
                  <li className="text-gray-300 text-sm">✓ Ongoing support</li>
                </ul>
                <Badge variant="outline" className="border-purple-500 text-purple-300">
                  From $150
                </Badge>
              </CardContent>
            </Card>

            {/* Service 2 */}
            <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Plugin Customization</h3>
                <p className="text-gray-300 mb-4">
                  Modify existing plugins to add new features or integrate with your server's ecosystem.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-300 text-sm">✓ Add custom features to existing plugins</li>
                  <li className="text-gray-300 text-sm">✓ Fix bugs and compatibility issues</li>
                  <li className="text-gray-300 text-sm">✓ Performance optimization</li>
                  <li className="text-gray-300 text-sm">✓ Custom configuration options</li>
                  <li className="text-gray-300 text-sm">✓ Integration with other plugins</li>
                </ul>
                <Badge variant="outline" className="border-purple-500 text-purple-300">
                  From $75
                </Badge>
              </CardContent>
            </Card>

            {/* Service 3 */}
            <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mb-4">
                  <User className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Server Setup & Configuration</h3>
                <p className="text-gray-300 mb-4">
                  Complete Minecraft server setup with optimized configurations and plugin installation.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-300 text-sm">✓ Server installation and configuration</li>
                  <li className="text-gray-300 text-sm">✓ Plugin setup and integration</li>
                  <li className="text-gray-300 text-sm">✓ Performance optimization</li>
                  <li className="text-gray-300 text-sm">✓ Security hardening</li>
                  <li className="text-gray-300 text-sm">✓ Backup and recovery setup</li>
                </ul>
                <Badge variant="outline" className="border-purple-500 text-purple-300">
                  From $100
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans Section with joke lines */}
      <section id="plans" className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Plans & Pricing
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-gray-900/40 rounded-xl overflow-hidden border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
              <div className="bg-gradient-to-r from-purple-800/50 to-fuchsia-800/50 p-6 text-center">
                <h3 className="text-xl font-bold">Basic</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-sm text-gray-300">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Access to 3 basic plugins</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Email support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Basic configuration help</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Monthly updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gray-500">✓</div>
                    <span className="text-gray-500">Telepathic support at 3 AM</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gray-500">✓</div>
                    <span className="text-gray-500">Plugin bedtime stories</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Plan 2 */}
            <div className="bg-gray-900/40 rounded-xl overflow-hidden border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20 relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="bg-gradient-to-r from-purple-700/50 to-fuchsia-700/50 p-6 text-center">
                <h3 className="text-xl font-bold">Premium</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold">$59</span>
                  <span className="text-sm text-gray-300">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Access to all plugins</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Priority email & Discord support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Advanced configuration help</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Bi-weekly updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>1 custom feature per month</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gray-500">✓</div>
                    <span className="text-gray-500">Personal plugin therapist</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gray-500">✓</div>
                    <span className="text-gray-500">Minecraft server lullabies</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Plan 3 */}
            <div className="bg-gray-900/40 rounded-xl overflow-hidden border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
              <div className="bg-gradient-to-r from-purple-800/50 to-fuchsia-800/50 p-6 text-center">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <div className="mt-4 mb-2">
                  <span className="text-3xl font-bold">$129</span>
                  <span className="text-sm text-gray-300">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Access to all plugins + beta features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>24/7 priority support</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Full server setup & configuration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>Weekly updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>3 custom features per month</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-fuchsia-400">✓</div>
                    <span>White-label options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gray-500">✓</div>
                    <span className="text-gray-500">Alonso will move in with you</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-gray-500">✓</div>
                    <span className="text-gray-500">Plugins get their own Instagram</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Client Reviews
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Review 1 */}
            <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-300">5.0</span>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "AlonsoAliaga's plugins have completely transformed our server. The performance is incredible, and our
                  players love the new features. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Reviewer"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">CosmicMC Network</h4>
                    <p className="text-xs text-gray-400">Server Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-300">5.0</span>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "The custom plugin Alonso created for us was exactly what we needed. The support is outstanding, and
                  he's always quick to help with any issues."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Reviewer"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">NebulaGames</h4>
                    <p className="text-xs text-gray-400">Admin Team</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="bg-gray-900/60 border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-300">5.0</span>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  "AlonsoAliaga Designs created the perfect texture pack for our server. The rank icons are beautiful
                  and our players absolutely love them!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Reviewer"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">StardustMC</h4>
                    <p className="text-xs text-gray-400">Creative Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-gray-900/60 rounded-lg border border-purple-500/30">
                <AccordionTrigger className="px-6 py-4 hover:text-fuchsia-400 transition">
                  How do I install your plugins?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Installing our plugins is simple! Just download the JAR file from your account dashboard, upload it to
                  your server's plugins folder, and restart your server. Detailed installation instructions are included
                  with each plugin.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-gray-900/60 rounded-lg border border-purple-500/30">
                <AccordionTrigger className="px-6 py-4 hover:text-fuchsia-400 transition">
                  Do your plugins work with the latest Minecraft version?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Yes! We keep all our plugins updated to support the latest Minecraft versions. We typically release
                  updates within a week of a new Minecraft version being released.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-gray-900/60 rounded-lg border border-purple-500/30">
                <AccordionTrigger className="px-6 py-4 hover:text-fuchsia-400 transition">
                  Can I request custom features for your plugins?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  We offer custom feature development for all our plugins. Premium and Enterprise plan subscribers get a
                  certain number of custom features included in their subscription. For Basic plan users or one-time
                  requests, we offer custom development at competitive rates.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-gray-900/60 rounded-lg border border-purple-500/30">
                <AccordionTrigger className="px-6 py-4 hover:text-fuchsia-400 transition">
                  How do I get support if I have issues?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  We offer support through multiple channels. You can email us at support@alonsoaliaga.com, join our
                  Discord server for community support, or open a ticket in your account dashboard. Premium and
                  Enterprise subscribers get priority support with faster response times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-gray-900/60 rounded-lg border border-purple-500/30">
                <AccordionTrigger className="px-6 py-4 hover:text-fuchsia-400 transition">
                  Do you offer refunds?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  We offer a 14-day money-back guarantee for all our plugins and subscriptions. If you're not satisfied
                  with your purchase, contact our support team within 14 days, and we'll process your refund. Custom
                  development services are non-refundable once work has begun.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Website Tools Section */}
      <section id="tools" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-500">
              Website Tools
            </span>
          </h2>
          <div id="website-tools" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* This div will be populated by JavaScript */}
            {/* Example Tool Card (will be replaced by JavaScript) */}
            <div className="bg-gray-900/60 rounded-xl border border-purple-500/30 hover:border-fuchsia-500/50 transition-all hover:shadow-lg hover:shadow-fuchsia-500/20 p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Loading Tools...</h3>
              <p className="text-gray-300 mb-4">Our website tools are loading. Please wait a moment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/70 to-fuchsia-900/70">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your Minecraft server?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of server owners who trust AlonsoAliaga Development for reliability and performance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white border-none">
              Browse Plugins
            </Button>
            <Button variant="outline" className="border-purple-500 text-purple-100 hover:bg-purple-900/30">
              <Discord className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-purple-500/20 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 flex items-center justify-center">
                <span className="font-bold text-sm">AA</span>
              </div>
              <span className="font-bold">AlonsoAliaga Development</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
              <Link href="#plugins" className="hover:text-fuchsia-400 transition text-sm">
                Plugins
              </Link>
              <Link href="#designs" className="hover:text-fuchsia-400 transition text-sm">
                Designs
              </Link>
              <Link href="#about" className="hover:text-fuchsia-400 transition text-sm">
                About
              </Link>
              <Link href="#staff" className="hover:text-fuchsia-400 transition text-sm">
                Staff
              </Link>
              <Link href="#services" className="hover:text-fuchsia-400 transition text-sm">
                Services
              </Link>
              <Link href="#plans" className="hover:text-fuchsia-400 transition text-sm">
                Plans
              </Link>
              <Link href="#reviews" className="hover:text-fuchsia-400 transition text-sm">
                Reviews
              </Link>
              <Link href="#faq" className="hover:text-fuchsia-400 transition text-sm">
                FAQ
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-fuchsia-400 transition">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="hover:text-fuchsia-400 transition">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="hover:text-fuchsia-400 transition">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} AlonsoAliaga Development. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
