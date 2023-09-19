# frozen_string_literal: true

Gem::Specification.new do |spec|
    spec.name          = "jekyll-theme-platoniq.net"
    spec.version       = "0.0.1"
    spec.authors       = [""]
    spec.email         = [""]
  
    spec.summary       = "A magazine style Jekyll theme."
    spec.homepage      = "https://github.com/Platoniq/jekyll-theme-platoniq.net"
    spec.license       = "AGPL-3.0"
  
    spec.files         = `git ls-files -z`.split("\x0").select do |f|
      f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i)
    end
  
    spec.required_ruby_version = ">= 2.5"
  
    spec.add_dependency "jekyll", "~> 4.2"
    # spec.add_development_dependency "rubocop-jekyll", "~> 0.12"
    # spec.add_runtime_dependency "jekyll-data", "~> 1.1.1"
    # spec.add_runtime_dependency "jekyll-plugin-platoniq-journal", "~>0.0.1"
    # spec.add_runtime_dependency "jekyll-seo-tag", "~>2.6"
    # spec.add_runtime_dependency "jekyll_version_plugin", "~>2.0.0"
    # spec.add_runtime_dependency "jekyll-menus"
    # spec.add_runtime_dependency 'jekyll-spark'
  end