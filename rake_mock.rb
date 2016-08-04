require 'uglifier'

FILE_NAME = `whoami`.chomp

def clean
  Dir['build/*.*'].each { |file| File.delete(file) }
end

def concat
  out = Dir['source/one.js', 'source/two.js', 'source/three.js'].reduce('') do |memo, file|
    memo += File.read(file)
  end

  File.open("build/#{FILE_NAME}.src.js", 'a') do |file|
    file.write(out)
  end
end

def uglify
  uglifier = Uglifier.new(mangle: { toplevel: true })

  out = uglifier.compile(File.read("build/#{FILE_NAME}.src.js"))

  File.open("build/#{FILE_NAME}.min.js", 'a') do |file|
    file.write(out)
  end
end

def run
  system "node build/#{FILE_NAME}.min.js"
end

clean
concat
uglify
run
