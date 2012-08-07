var main = function() {

    var source = document.getElementById('template').innerHTML;
    var template = new Template({
        source: source
    });

    document.getElementById('result').innerHTML = template.render({
    	data_20120803:{
		title: '8月3日の日記',
		content: 'またまたランチを食べすぎました。<hr>'
	},
	data_20120802:{
		title: '8月2日の日記',
		content: '昨日と同じく、ランチを食べすぎました。'
	},
	data_20120801:{
		title: '8月1日の日記',
		content: 'ランチを食べすぎました。"test" <br><hr>'
	}
    });
};

document.addEventListener('DOMContentLoaded', main);