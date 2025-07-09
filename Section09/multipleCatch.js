// try {
//     throw new ReferenceError("Invalid reference!");
// } catch (e if e instanceof ReferenceError) {
//     console.log("Caught a ReferenceError.");
// } catch (e if e === "quit") {
//     console.log("Received quit signal.");
// } catch (e if typeof e === "string") {
//     console.log("Caught a string: " + e);
// } catch (e) {
//     console.log("Caught something else: " + e);
// } finally {
//     console.log("Cleanup or logging...");
// }

try {
    throw "quit";
} catch (e) {
    if (e instanceof ReferenceError) {
      // handle
    } else if (e === "quit") {
      // handle
    } else if (typeof e === "string") {
      // handle
    } else {
      // fallback
    }
}
