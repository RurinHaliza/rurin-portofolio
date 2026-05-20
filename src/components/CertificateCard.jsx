function CertificateCard({
  title,
  issuer,
  images,
  category,
  link,
}) {

  return (

    <div
      className="
        bg-[#111]
        rounded-2xl
        overflow-hidden
        border
        border-gray-800

        hover:border-cyan-400
        hover:-translate-y-2

        transition
        duration-300
      "
    >

      {/* Image Container */}
      <div className="relative overflow-hidden">

        <img
          src={images[0]}
          alt={title}
          className="
            w-full
            h-52
            object-cover

            hover:scale-105

            transition
            duration-500
          "
        />

        {/* Multiple Image Badge */}
        {images.length > 1 && (

          <div
            className="
              absolute
              top-3
              right-3

              bg-black/70
              backdrop-blur-sm

              text-white
              text-xs

              px-3
              py-1

              rounded-full
            "
          >
            {images.length} Pages
          </div>

        )}

      </div>

      {/* Content */}
      <div className="p-6">

        {/* Category */}
        <span
          className="
            inline-block

            text-xs
            text-cyan-400

            bg-cyan-400/10

            px-3
            py-1

            rounded-full

            mb-4
          "
        >
          {category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">
          {title}
        </h3>

        {/* Issuer */}
        <p className="text-gray-400 mb-6">
          {issuer}
        </p>

        {/* Image Preview */}
        <div className="flex gap-2 mb-6 overflow-x-auto">

          {images.map((image, index) => (

            <img
              key={index}
              src={image}
              alt={`${title}-${index}`}
              className="
                w-20
                h-14
                object-cover

                rounded-lg

                border
                border-gray-700

                hover:border-cyan-400

                transition
                duration-300
              "
            />

          ))}

        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block

            bg-cyan-400
            text-black

            px-5
            py-2

            rounded-lg

            font-semibold

            hover:scale-105

            transition
            duration-300
          "
        >
          View Certificate
        </a>

      </div>

    </div>

  )
}

export default CertificateCard