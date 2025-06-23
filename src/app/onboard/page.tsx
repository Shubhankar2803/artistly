import Header from "@/components/Header"
import ArtistOnboardingForm from "@/components/Form/ArtistonboardingForm"
import Footer from "@/components/Footer"

export default function OnboardPage() {
  return (
    <>
      <Header />
      <main
        className="px-0 py-10 w-full bg-white dark:bg-black"
        style={{
          minHeight: "100vh",
        }}
      >
        <h2
          className="text-2xl font-bold mb-4 text-center text-[#a259ff] drop-shadow-[0_0_8px_#a259ff]"
        >
          Onboard an Artist
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl">
            <ArtistOnboardingForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
