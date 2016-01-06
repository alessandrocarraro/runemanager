
var sets = ["energy", "fatal", "guard", "blade", "violent", "swift"];
var runes = ["atk", "def", "hp", "spd", "acc", "res", "cr", "cd", "atk%", "def%", "hp%"];

function menu(elem, values)
{
	dd = document.getElementById(elem);
	for(var i = 0; i < values.length; i++) {
		dd[dd.length] = new Option(values[i], values[i]);
	}
}

function page_load() 
{
	menu("set1", sets);
	menu("set2", sets);
	menu("set3", sets);
	menu("rune2", runes);
	menu("rune4", runes);
	menu("rune6", runes);
}

