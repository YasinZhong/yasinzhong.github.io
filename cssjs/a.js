

		var windoww=window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth;
		var windowh=window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;
		var probeoffsetwidth = document.getElementById("probe").offsetWidth;//��ȡ̽��div��ʵ��ƽ����
		var windowwcm = (screen.width / probeoffsetwidth).toFixed(1);//����õ���Ļ��������
		//����Ϊ��ȡ��Ļ��С
		
		function FGoodWidth(id)
		{
			if( windoww<windowh )document.getElementById(id).style.width="99%";
			//ֻҪ������״̬��
			if( windoww>windowh && windowwcm<=38)document.getElementById(id).style.width=windoww*0.75+"px";
			//cmС�� 38 ���ף�ͨ���Ǻ������ƶ��豸��ͷֵ���
			if( windoww>windowh && windowwcm>38)document.getElementById(id).style.width=windoww*0.5+"px";
			//����չʾ��ʽ��������ƶ��豸����ȴ��ڸ߶��Ǻ��������С�� 38 ���ף�ͨ�����ƶ��豸�����ߵͷֱ��ʵĵ���
		}
		FGoodWidth("div-content");