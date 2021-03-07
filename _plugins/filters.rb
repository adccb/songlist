module Jekyll
  module InstrumentFilter
    def instrument(input)
      input.map { |input| input[0] }.join(" ")
    end
  end

  module LyricsFilter
    def lyrics(input)
      input.gsub(/\n+/, "<br />")
    end
  end
end

Liquid::Template.register_filter(Jekyll::InstrumentFilter)
Liquid::Template.register_filter(Jekyll::LyricsFilter)
