var System = java.lang.System;
var JFrame = javax.swing.JFrame;
var ArrayList = java.util.ArrayList;

importClass(java.util.HashMap);
importPackage(java.net);

var gui = JavaImporter(java.awt, java.awt.event, javax.swing);
with (gui) {
    var f = new JFrame("Demo");
    f.setSize(300, 200);
    f.setVisible(true);
}

// new
var file = new java.io.File("/tmp/test");
var writer = new java.io.FileWriter(file);

// static method
var version = java.lang.System.getProperty("java.version");

// instance method
writer.write("Hello World");
writer.close();

file.name         // Gọi file.getName()
file.directory    // Gọi file.isDirectory()

obj ;           // Gọi method f(int)
obj["f(float)"](Math.PI);   // Gọi method f(float)

for (var m in java.lang.System) print(m);  // liệt kê static members
for (var p in file) print(p);              // liệt kê instance members

var strings = java.lang.reflect.Array.newInstance(java.lang.String, 10);
strings[0] = "Hello";
print(strings.length);

// Interface
var handler = new java.awt.event.FocusListener({
    focusGained: function(e) { print("Got focus"); },
    focusLost: function(e) { print("Lost focus"); }
});

// Abstract class
var adapter = new java.awt.event.WindowAdapter({
    windowClosing: function(e) { java.lang.System.exit(0); }
});

// Interface 1 phương thức
button.addActionListener(function(e) { print("Clicked!"); });

// Đa interface
var obj = new JavaAdapter(java.awt.event.ActionListener, java.lang.Runnable, {
    run: function() {},
    actionPerformed: function(e) {}
});
  
try {
    java.lang.System.getProperty(null);
} catch(e) {
    print(e.javaException);  // java.lang.NullPointerException
}
  