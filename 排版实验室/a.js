		
		
		
		var VarBody = (document.getElementsByTagName("body"))[0];//返回的是数组
		var VarDivProb= document.createElement("div");
		VarDivProb.id = "probe";
		VarDivProb.style="width:1cm;";
		VarBody.appendChild(VarDivProb);
		//以上创建一个探针，以供下面计算屏幕
		

		var windoww=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
		var windowh=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
		var probeoffsetwidth = document.getElementById("probe").offsetWidth;//获取探针div的实际平面宽度
		var windowwcm = (screen.width / probeoffsetwidth).toFixed(1);//计算得到屏幕的厘米数
		//以上为获取屏幕大小
		
		function FGoodWidth(id)
		{
			if( windoww<windowh )
			{document.getElementById(id).style.width="92%";}//只要是竖屏状态。
			
			if( windoww>windowh && windowwcm<=38)
			{document.getElementById(id).style.width=windoww*0.75+"px";}
			//cm小于 38 厘米，通常是横屏的移动设备或低分电脑
			
			if( windoww>windowh && windowwcm>38)
			{document.getElementById(id).style.width=windoww*0.5+"px";}
			//宽度大于高度是横屏，宽度大于 38 厘米，通常是高分辨率的电脑
		}