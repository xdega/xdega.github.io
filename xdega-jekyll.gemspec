# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "xdega-jekyll"
  spec.version       = "0.1.0"
  spec.authors       = ["Liam Hockley"]
  spec.email         = ["contact@liamhockley.me"]

  spec.summary       = "Personal website theme for Liam Hockley."
  spec.homepage      = "https://github.com/xdega/xdega.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end