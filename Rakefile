# get the owner of the current shell session and assign it to the constant.
FILE_NAME = `whoami`.chomp

task :clean do
  Dir['build/*.*'].each { |file| File.delete(file) }
end

task :concat do
  out = Dir['source/one.js', 'source/two.js', 'source/three.js'].reduce('') do |memo, file|
    memo += File.read(file)
  end

  File.open("build/#{FILE_NAME}.src.js", 'a') do |file|
    file.write(out)
  end
end
