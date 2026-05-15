import certificates from "../data/certificates"
import CertificateCard from "../components/CertificateCard"

function Certificates() {
  return (
    <section
      id="certificates"
      className="py-28 px-6 bg-black"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              {...certificate}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default Certificates