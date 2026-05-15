function GithubStats() {
  return (
    <section className="py-28 px-6 bg-black">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          GitHub Statistics
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <img
            src="https://github-readme-stats.vercel.app/api?username=RurinHaliza&show_icons=true&theme=tokyonight"
            alt="github stats"
            className="rounded-2xl"
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=RurinHaliza&layout=compact&theme=tokyonight"
            alt="top languages"
            className="rounded-2xl"
          />

        </div>

      </div>

    </section>
  )
}

export default GithubStats