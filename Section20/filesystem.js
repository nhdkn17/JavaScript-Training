var fs = requestFileSystemSync(PERSISTENT, 1024*1024);

requestFileSystem(TEMPORARY, 50*1024*1024, successCallback, errorCallback);
