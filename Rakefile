require 'uglifier'

# get the owner of the current shell session and assign it to the constant.
FILE_NAME = `whoami`.chomp

desc 'remove all files form build folder.'
task :clean do
  Dir['build/*.*'].each { |file| File.delete(file) }
end

desc 'concat all files in source in order.'
task concat: [:clean] do
  out = Dir['source/one.js', 'source/two.js', 'source/three.js'].reduce('') do |memo, file|
    memo += File.read(file)
  end

  File.open("build/#{FILE_NAME}.src.js", 'a') do |file|
    file.write(out)
  end
end

desc 'minify the js file.'
task uglify: [:concat] do
  uglifier = Uglifier.new(:mangle => false)
  uglifier.compile(File.read("build/#{FILE_NAME}.src.js"))
end
