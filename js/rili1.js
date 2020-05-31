var $$ = function(id) {
	return "string" == typeof id ? document.getElementById(id) : id;
};
var fh;
var Class = {
	create: function() {
		return function() {
			this.initialize.apply(this, arguments);
		}
	}
}
Object.extend = function(destination, source) {
	for(var property in source) {
		destination[property] = source[property];
	}
	return destination;
}
var Calendar = Class.create();
Calendar.prototype = {
	initialize: function(container, options) {
		this.Container = $$(container); //����(table�ṹ)
		this.Days = []; //���ڶ����б�
		this.SetOptions(options);
		this.Year = this.options.Year;
		this.Month = this.options.Month;
		this.onToday = this.options.onToday;
		this.onSignIn = this.options.onSignIn;
		this.onFinish = this.options.onFinish;
		this.qdDay = this.options.qdDay;
		this.isSignIn = false;
		this.Draw();
	},
	//����Ĭ������
	SetOptions: function(options) {
		this.options = { //Ĭ��ֵ
			Year: new Date().getFullYear(), //��ʾ��
			Month: new Date().getMonth() + 1, //��ʾ��
			qdDay: null,
			onToday: function() {}, //��ǩ��
			onSignIn: function(){}, //�����Ƿ�ǩ��
			onFinish: function() {} //��������󴥷�
		};
		Object.extend(this.options, options || {});
	},
	//��һ����
	PreMonth: function() {
		//��ȡ����һ���µ����ڶ���
		var d = new Date(this.Year, this.Month - 2, 1);
		//����������
		this.Year = d.getFullYear();
		this.Month = d.getMonth() + 1;
		//���»�����
		this.Draw();
	},
	//��һ����
	NextMonth: function() {
		var d = new Date(this.Year, this.Month, 1);
		this.Year = d.getFullYear();
		this.Month = d.getMonth() + 1;
		this.Draw();
	},
	//������
	Draw: function() {
		//ǩ������
		var day = this.qdDay;
		//�����б�
		var arr = [];
		//�õ��µ�һ����һ���е�����ֵ��Ϊ�������һ�������
		for(var i = 1, firstDay = new Date(this.Year, this.Month - 1, 1).getDay(); i <= firstDay; i++) {
			arr.push("&nbsp;");
		}
		//�õ������һ����һ�����е�����ֵ��Ϊ���µ�����
		for(var i = 1, monthDay = new Date(this.Year, this.Month, 0).getDate(); i <= monthDay; i++) {
			arr.push(i);
		}
		var frag = document.createDocumentFragment();
		this.Days = [];
		while(arr.length > 0) {
			//ÿ�����ڲ���һ��tr
			var row = document.createElement("tr");
			//ÿ��������7��
			for(var i = 1; i <= 7; i++) {
				var cell = document.createElement("td");
				cell.innerHTML = "&nbsp;";
				if(arr.length > 0) {
					var d = arr.shift();
					cell.innerHTML = "<span>" + d + "</span>";
					if(d > 0 && day.length) {
						for(var ii = 0; ii < day.length; ii++) {
							this.Days[d] = cell;
							//��ǩ��
							if(this.IsSame(new Date(this.Year, this.Month - 1, d), day[ii])) {
								this.onToday(cell);
							}
							//�жϽ����Ƿ�ǩ��
							if(this.checkSignIn(new Date(), day[ii])) {
								this.onSignIn();
							}
						}
					}
				}
				row.appendChild(cell);
			}
			frag.appendChild(row);
		}
		//����������ٲ���(ie��table������innerHTML)
		while(this.Container.hasChildNodes()) {
			this.Container.removeChild(this.Container.firstChild);
		}
		this.Container.appendChild(frag);
		this.onFinish();
		if(this.isSignIn) {
			this.isSignIn = false;
			if(fh){
				return this.SignIn1(fh);
			}
		}
	},
	//�Ƿ�ǩ��
	IsSame: function(d1, d2) {
		d2 = new Date(d2 * 1000);
		return(d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate());
	},
	//�����Ƿ�ǩ��
	checkSignIn: function(d1, d2) {
		d2 = new Date(d2 * 1000);
		return(d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate());
	},
	//ǩ��
	SignIn: function() {
		var now = new Date();
		var Year = now.getFullYear();
		var Month = now.getMonth() + 1;
		if(Year != this.Year || Month != this.Month) {
			this.Year = Year;
			this.Month = Month;
			this.isSignIn = true;
			return this.Draw();
		}
		var day = now.getDate();
		var arr = new Array();
		var tb = document.getElementById('idCalendar');
		for(var i = 0; i < tb.rows.length; i++) {
			for(var j = 0; j < tb.rows[i].cells.length; j++) {
				if(day == tb.rows[i].cells[j].innerText && Year == this.Year && Month == this.Month) {
					if(tb.rows[i].cells[j].className == "onToday"){
						return 2;
					}
					tb.rows[i].cells[j].className = "onToday"
					this.qdDay.push(Date.parse(new Date()) / 1000)
					return 1;
					
				}
			}
		}
	},
	//ǩ��
	SignIn1: function(now1) {
		fh=now1;
		var now = new Date();
		now.setTime(now1);
		var Year = now.getFullYear();
		var Month = now.getMonth() + 1;
		if(Year != this.Year || Month != this.Month) {
			this.Year = Year;
			this.Month = Month;
			this.isSignIn = true;
			return this.Draw(now1);
		}
		var day = now.getDate();
		var arr = new Array();
		var tb = document.getElementById('idCalendar');
		for(var i = 0; i < tb.rows.length; i++) {
			for(var j = 0; j < tb.rows[i].cells.length; j++) {
				if(day == tb.rows[i].cells[j].innerText && Year == this.Year && Month == this.Month) {
					if(tb.rows[i].cells[j].className == "onToday"){
						return 2;
					}
					tb.rows[i].cells[j].className = "onToday"
					this.qdDay.push(now1/1000)
					return 1;
					
				}
			}
		}
	}
};