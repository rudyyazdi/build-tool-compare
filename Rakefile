require 'uglifier'

# get the owner of the current shell session and assign it to the constant.
FILE_NAME = `whoami`.chomp

task default: :run

desc 'remove all files from build folder.'
task :clean do
  Dir['build/*.*'].each { |file| File.delete(file) }
end

desc 'concat all files in source in order.'
task concat: :clean do
  out = ['one.js', 'two.js', 'three.js'].reduce('') do |memo, file|
    memo += File.read("source/#{file}")
  end

  File.open("build/#{FILE_NAME}.src.js", 'a') do |file|
    file.write(out)
  end
end

desc 'minify the js file.'
task uglify: [:concat, :clean] do
  uglifier = Uglifier.new(mangle: { toplevel: true })

  out = uglifier.compile(File.read("build/#{FILE_NAME}.src.js"))

  File.open("build/#{FILE_NAME}.min.js", 'a') { |file| file.write(out) }
end

desc 'run the minfied file!'
task run: :uglify do
  sh "node build/#{FILE_NAME}.min.js"
end
