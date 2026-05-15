function CertificateCard({
  title,
  issuer,
  image,
  link,
}) {
  return (
    <div className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition">

      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>

        <p className="text-gray-400 mb-6">
          {issuer}
        </p>

        <a
          href={link}
          target="_blank"
          className="inline-block bg-cyan-400 text-black px-5 py-2 rounded-lg font-semibold"
        >
          View Certificate
        </a>

      </div>

    </div>
  )
}

export default CertificateCard