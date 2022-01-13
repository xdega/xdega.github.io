import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <aside className="flex p-2 m-2 ml-0 pl-0 pt-0 mt-0 flex-col sm:flex-row">
      <StaticImage
        className="hidden sm:block sm:flex-1"
        alt="My Profile Avatar" 
        src="../images/avatar.png"
        style={{ height: "100%", width: "100%"}}
        imgStyle={{ objectFit: "contain" }}
        layout="fixed"
        height={100}
        width={100}
        quality={95}
      />
      {/**
       * The Bio content here is, simple, static HTML instad of pulling from 
       * some config, meta-data, etc. Sometimes it's really not worth trying to 
       * be overly "clever", when a simple solution is acceptable.
       */}
      <div className="flex-5 text-gray-500 sm:pl-4">
        <p data-testid="bio-intro" className="mb-2 sm:mb-1">Hello, I am a Software Engineer focused on Ed Tech and the WWW.</p>
        <p>
          My primary expertise includes modern PHP and JavaScript, along with 
          numerous tools and technologies that saturate the world of Web 
          Development.
        </p>
      </div>
    </aside>
  )
}

export default Bio
