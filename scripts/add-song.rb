tmp_filename = "./tmp.txt"

print "what title? "
title = gets.chomp
print "which artist? "
artist = gets.chomp
print "which instruments? (csv) "
instruments = gets.chomp.split(',').map &:strip
print "what key? "
key = gets.chomp

# get lyrics from nvim
system("touch", tmp_filename)
system("nvim", tmp_filename)
lyrics = File.read(tmp_filename)
File.delete(tmp_filename)

p = <<DOCEND.downcase.strip
---
artist: #{artist}
key: #{key}
instruments:
#{instruments.map { |i| "  - #{i}"}.join("\n")}
title: #{title}
layout: song
---
#{lyrics}
DOCEND

File.open("./_songs/#{title.gsub(' ', '-')}.md", "w") do |f| f.write(p) end
