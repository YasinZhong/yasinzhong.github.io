

		var windoww=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
		var windowh=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
		var probeoffsetwidth = document.getElementById("probe").offsetWidth;//获取探针div的实际平面宽度
		var windowwcm = (screen.width / probeoffsetwidth).toFixed(1);//计算得到屏幕的厘米数
		//以上为获取屏幕大小
		
		function FGoodWidth(id)
		{
			if( windoww<windowh )document.getElementById(id).style.width="99%";
			//只要是竖屏状态。
			if( windoww>windowh && windowwcm<=38)document.getElementById(id).style.width=windoww*0.75+"px";
			//cm小于 38 厘米，通常是横屏的移动设备或低分电脑
			if( windoww>windowh && windowwcm>38)document.getElementById(id).style.width=windoww*0.5+"px";
			//调整展示样式，如果是移动设备【宽度大于高度是横屏，宽度小于 38 厘米，通常是移动设备，或者低分辨率的电脑
		}
		FGoodWidth("div-content");