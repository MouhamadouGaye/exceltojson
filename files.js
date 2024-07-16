const input = document.getElementById("input");
input.addEventListener("change", function () {
  readXlsxFile(input.files[0]).then(function (data) {
    var i = 0;
    var headers = [];
    var json_object = [];
    data.map((row, index) => {
      if (i == 0) {
        headers = row;
      }
      if (i > 0) {
        var temp = {};
        for (var x = 0; x < row.length; x++) {
          temp[headers[x]] = row[x];
        }
        json_object.push(temp);
      }
      i++;
    });

    document.getElementById("json-data").value = JSON.stringify(
      json_object,
      null,
      2
    );
  });
});
