

am4core.ready(function() {
	//      Main Chart


	// Themes begin
	am4core.useTheme(am4themes_animated);
	// Themes end

	var chart1 = am4core.create("chartdiv", am4charts.XYChart);



	var data1 = [];
	var value = 50;
	for(var i = 0; i < 300; i++){
	  var date = new Date();
	  date.setHours(0,0,0,0);
	  date.setDate(i);
	  value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
	  data1.push({date:date, value: value});
	}

	chart1.data = data1;

	chart1.zoomOutButton.background.fill = am4core.color('#d6787c')

	// Create axes
	var dateAxis = chart1.xAxes.push(new am4charts.DateAxis());
	dateAxis.renderer.minGridDistance = 60;

	

	if (window.innerWidth <= 680)  {
		dateAxis.maxZoomCount = 100 
	}

	var valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());

	// Create series
	var series1 = chart1.series.push(new am4charts.LineSeries());
	series1.dataFields.valueY = "value";
	series1.dataFields.dateX = "date";
	series1.strokeWidth = 4;
	series1.stroke = am4core.color('#af161e')
	series1.tooltipText = "{value}"

	series1.tooltip.pointerOrientation = "vertical";

	series1.fill = am4core.color('#d6787c')

	chart1.cursor = new am4charts.XYCursor();
	chart1.cursor.snapToSeries = series1;
	chart1.cursor.xAxis = dateAxis;

	//chart.scrollbarY = new am4core.Scrollbar();
	var scroll = new am4core.Scrollbar();

	chart1.scrollbarX = scroll;





	HTMLCollection.prototype.slice = function(start, end) {
		var res = []

		for (i in this) {
			if (i > start && i <= end) {
				res.push(this[i])
			}
		}

		return res
	};



	var collapse = document.getElementsByClassName('collapse')[0];
	var mainChartContainer = document.getElementsByClassName('chart-container-bg')[0];
	var chart = document.getElementsByClassName('chart-container')[0]
	var tableContainer = document.getElementsByClassName('table-container')[0];
	var table = document.getElementsByClassName('table-medium')[0];
	var range = document.getElementsByClassName('range')[0]


	collapse.addEventListener('click', () => {
		mainChartContainer.classList.toggle('collapse-container')
		chart.classList.toggle('collapse-container')
		collapse.classList.toggle('collapse-rotate')
		tableContainer.classList.toggle('table-collapsed')
		table.classList.toggle('table-collapsed')
		range.classList.toggle('hide')
	})






 	var data = {
 		'headers': {
 			'2016': ['jan', 'feb', "mar", "apr", 'may', 'jun', 'jul', 'aug', 'sep', 'nov', 'dec', 'oct'],
 			'2017': ['jan', 'feb', "mar", "apr", 'may', 'jun', 'jul', 'aug', 'sep', 'nov', 'dec', 'oct'],
 			'2018': ['jan', 'feb', "mar", "apr", 'may', 'jun', 'jul', 'aug', 'sep', 'nov', 'dec', 'oct'],
 			'2019': ['jan', 'feb', "mar", "apr", 'may', 'jun', 'jul', 'aug']
 		},
 		'visible': ['2017'],
 		'data': {
 				'safety-and-security': {
 					'prop': {
 						'name': 'Safety and Security',
 						'color': '#327644',
 						'icon': 'pictures/powers-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 1,
	 					'mar': 1,
	 					'apr': 1,
	 					'may': 1,
	 					'jun': 1,
	 					'jul': 1,
	 					'aug': 1,
	 					'sep': 1,
	 					'nov': 1,
	 					'dec': 1,
	 					'oct': 1
 					},
 					'2017': {
 						'jan': 2,
	 					'feb': 2,
	 					'mar': 2,
	 					'apr': 2,
	 					'may': 2,
	 					'jun': 2,
	 					'jul': 2,
	 					'aug': 2,
	 					'sep': 2,
	 					'nov': 2,
	 					'dec': 2,
	 					'oct': 2
 					},
 					'2018': {
 						'jan': 3,
	 					'feb': 3,
	 					'mar': 3,
	 					'apr': 3,
	 					'may': 3,
	 					'jun': 3,
	 					'jul': 3,
	 					'aug': 3,
	 					'sep': 3,
	 					'nov': 3,
	 					'dec': 3,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 4,
	 					'feb': 4,
	 					'mar': 4,
	 					'apr': 4,
	 					'may': 4,
	 					'jun': 4,
	 					'jul': 4,
	 					'aug': 4,
 					}
 					
 				},
 				'adequate-standard-of-living': {
 					'prop': {
 						'name': 'Adequate Standard of Living',
 						'color': '#709608',
 						'icon': 'pictures/corruption-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 				'access-to-livelihoods': {
 					'prop': {
 						'name': 'Access To Livelihoods',
 						'color': '#00997F',
 						'icon': 'pictures/open-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 				'housing': {
 					'prop': {
 						'name': 'Housing, Land and Property',
 						'color': '#2D72B7',
 						'icon': 'pictures/rights-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 				'documentation': {
 					'prop': {
 						'name': 'Documentation',
 						'color': '#3A2E72',
 						'icon': 'pictures/order-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 				'family-reunification': {
 					'prop': {
 						'name': 'Family Reunification',
 						'color': '#90278F',
 						'icon': 'pictures/regs-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 				'participation-in-public-affairs': {
 					'prop': {
 						'name': 'Participation In Public Affairs',
 						'color': '#7F2220',
 						'icon': 'pictures/civil-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 				'justice': {
 					'prop': {
 						'name': 'Access to Effective Remedy & Justice',
 						'color': '#E57839',
 						'icon': 'pictures/crime-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 				'total': {
 					'prop': {
 						'name': 'Total',
 						'color': '#90278F',
 						'icon': 'pictures/regs-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 			}
 	}









 	var legalDevs = {
 		'data': [
 			{
 				'name': 'Cabinet provides limited financial Remedies for Housing damaged or destroyed during the conflict'
 			},
 			{
 				'name': 'Cabinet approves state budget funds allocation to local council for IDP housing'
 			},
 			{
 				'name': 'Cabinet modified Rules on movement of persons and goods through the contact line'
 			},
 			{
 				'name': 'Increase in living wage and minimal pension become effective from 1 July 2019'
 			},
 			{
 				'name': 'Increase in living wage and minimal pension become effective from 1 July 2019'
 			}
 		]
 	}








 	var modalData = {
 		'headers': {
 			'2016': ['jan', 'feb', "mar", "apr", 'may', 'jun', 'jul', 'aug', 'sep', 'nov', 'dec', 'oct'],
 			'2017': ['jan', 'feb', "mar", "apr", 'may', 'jun', 'jul', 'aug', 'sep', 'nov', 'dec', 'oct'],
 			'2018': ['jan', 'feb', "mar", "apr", 'may', 'jun', 'jul', 'aug', 'sep', 'nov', 'dec', 'oct'],
 			'2019': ['jan', 'feb', "mar", "apr", 'may', 'jun', 'jul', 'aug']
 		},
 		'visible': ['2016'],
 		'data': {
 				'level-of-clearance-of-mines': {
 					'prop': {
 						'name': ' Level of clearance of mines and unexploded ordnance',
 						'color': '#327644',
 						'icon': 'pictures/powers-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 1,
	 					'mar': 1,
	 					'apr': 1,
	 					'may': 1,
	 					'jun': 1,
	 					'jul': 1,
	 					'aug': 1,
	 					'sep': 1,
	 					'nov': 1,
	 					'dec': 1,
	 					'oct': 1
 					},
 					'2017': {
 						'jan': 2,
	 					'feb': 2,
	 					'mar': 2,
	 					'apr': 2,
	 					'may': 2,
	 					'jun': 2,
	 					'jul': 2,
	 					'aug': 2,
	 					'sep': 2,
	 					'nov': 2,
	 					'dec': 2,
	 					'oct': 2
 					},
 					'2018': {
 						'jan': 3,
	 					'feb': 3,
	 					'mar': 3,
	 					'apr': 3,
	 					'may': 3,
	 					'jun': 3,
	 					'jul': 3,
	 					'aug': 3,
	 					'sep': 3,
	 					'nov': 3,
	 					'dec': 3,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 4,
	 					'feb': 4,
	 					'mar': 4,
	 					'apr': 4,
	 					'may': 4,
	 					'jun': 4,
	 					'jul': 4,
	 					'aug': 4,
 					}
 					
 				},
 				'no-movement-restrictions': {
 					'prop': {
 						'name': 'No movement restrictions for IDPs',
 						'color': '#709608',
 						'icon': 'pictures/corruption-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 				'reduction-of-checkpoints': {
 					'prop': {
 						'name': 'Reduction of checkpoints or other special security measures',
 						'color': '#00997F',
 						'icon': 'pictures/open-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 				'smth': {
 					'prop': {
 						'name': 'Tmth',
 						'color': '#709608',
 						'icon': 'pictures/corruption-icon.png'
 					},
 					'2016': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2017': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2018': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1,
	 					'sep': 0,
	 					'nov': 3,
	 					'dec': 1,
	 					'oct': 3
 					},
 					'2019': {
 						'jan': 1,
	 					'feb': 3,
	 					'mar': 2,
	 					'apr': 5,
	 					'may': 4,
	 					'jun': 3,
	 					'jul': 2,
	 					'aug': -1
 					}
 				},
 			}
 	}



 	function chartRender() {
		var chart = am4core.create("chartdiv1", am4charts.XYChart);

		var dataset = [{
			  "year": "1994",
			  "cars": 1587,
			  "motorcycles": 650,
			  "bicycles": 121
			}, {
			  "year": "1995",
			  "cars": 1567,
			  "motorcycles": 683,
			  "bicycles": 146
			}, {
			  "year": "1996",
			  "cars": 1617,
			  "motorcycles": 691,
			  "bicycles": 138
			}, {
			  "year": "1997",
			  "cars": 1630,
			  "motorcycles": 642,
			  "bicycles": 127
			}, {
			  "year": "1998",
			  "cars": 1660,
			  "motorcycles": 699,
			  "bicycles": 105
			}, {
			  "year": "1999",
			  "cars": 1683,
			  "motorcycles": 721,
			  "bicycles": 109
			}, {
			  "year": "2000",
			  "cars": 1691,
			  "motorcycles": 737,
			  "bicycles": 112
			}, {
			  "year": "2001",
			  "cars": 1298,
			  "motorcycles": 680,
			  "bicycles": 101
			}, {
			  "year": "2002",
			  "cars": 1275,
			  "motorcycles": 664,
			  "bicycles": 97
			}, {
			  "year": "2003",
			  "cars": 1246,
			  "motorcycles": 648,
			  "bicycles": 93
			}, {
			  "year": "2004",
			  "cars": 1318,
			  "motorcycles": 697,
			  "bicycles": 111
			}, {
			  "year": "2005",
			  "cars": 1213,
			  "motorcycles": 633,
			  "bicycles": 87
			}, {
			  "year": "2006",
			  "cars": 1199,
			  "motorcycles": 621,
			  "bicycles": 79
			}, {
			  "year": "2007",
			  "cars": 1110,
			  "motorcycles": 210,
			  "bicycles": 81
			}, {
			  "year": "2008",
			  "cars": 1165,
			  "motorcycles": 232,
			  "bicycles": 75
			}, {
			  "year": "2009",
			  "cars": 1145,
			  "motorcycles": 219,
			  "bicycles": 88
			}, {
			  "year": "2010",
			  "cars": 1163,
			  "motorcycles": 201,
			  "bicycles": 82
			}, {
			  "year": "2011",
			  "cars": 1180,
			  "motorcycles": 285,
			  "bicycles": 87
			}, {
			  "year": "2012",
			  "cars": 1159,
			  "motorcycles": 277,
			  "bicycles": 71
			}];

		chart.data = dataset





		am4core.options.autoSetClassName = true;



		chart.dateFormatter.inputDateFormat = "yyyy";
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 60;
		dateAxis.startLocation = 0.5;
		dateAxis.endLocation = 0.5;
		dateAxis.baseInterval = {
			timeUnit: "year",
			count: 1
		}

		chart.zoomOutButton.background.fill = am4core.color('#d6787c')


		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.tooltip.disabled = true;

		var series = chart.series.push(new am4charts.LineSeries());
		series.dataFields.dateX = "year";
		series.name = "Level of clearance of mines and unexploded ordnance";
		series.dataFields.valueY = "cars";
		// series.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/car.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
		series.tooltipText = "[#000]{valueY.value}[/]";
		series.tooltip.background.fill = am4core.color("#FFF");
		series.tooltip.getStrokeFromObject = true;
		series.tooltip.background.strokeWidth = 3;
		series.tooltip.getFillFromObject = false;
		series.fill = am4core.color('#6F0000')
		series.fillOpacity = 0.6;
		series.stroke = am4core.color('white')
		series.strokeWidth = 2;
		series.stacked = true;
		series.dummyData = {
		  flag: "pictures/powers-icon.png"
		};

		var series2 = chart.series.push(new am4charts.LineSeries());
		series2.name = "No movement restrictions for IDPs";
		series2.dataFields.dateX = "year";
		series2.dataFields.valueY = "motorcycles";
		// series2.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/motorcycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
		series2.tooltipText = "[#000]{valueY.value}[/]";
		series2.tooltip.background.fill = am4core.color("#FFF");
		series2.tooltip.getFillFromObject = false;
		series2.tooltip.getStrokeFromObject = true;
		series2.tooltip.background.strokeWidth = 3;
		series2.sequencedInterpolation = true;
		series2.fill = am4core.color('#AA0000')
		series2.fillOpacity = 0.6;
		series2.stroke = am4core.color('white')
		series2.stacked = true;
		series2.strokeWidth = 2;
		series2.dummyData = {
		  flag: "pictures/corruption-icon.png"
		};

		var series3 = chart.series.push(new am4charts.LineSeries());
		series3.name = "Reduction of checkpoints or other special security measures";
		series3.dataFields.dateX = "year";
		series3.dataFields.valueY = "bicycles";
		// series3.tooltipHTML = "<img src='https://www.amcharts.com/lib/3/images/bicycle.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>{valueY.value}</b></span>";
		series3.tooltipText = "[#000]{valueY.value}[/]";
		series3.tooltip.background.fill = am4core.color("#FFF");
		series3.tooltip.getFillFromObject = false;
		series3.tooltip.getStrokeFromObject = true;
		series3.tooltip.background.strokeWidth = 3;
		series3.sequencedInterpolation = true;
		series3.fill = am4core.color('#FF0000')
		series3.fillOpacity = 0.6;
		series3.stroke = am4core.color('white')
		series3.defaultState.transitionDuration = 1000;
		series3.stacked = true;
		series3.strokeWidth = 2;


		series3.dummyData = {
		  flag: "pictures/open-icon.png"
		};

		chart.cursor = new am4charts.XYCursor();
		chart.cursor.xAxis = dateAxis;
		chart.scrollbarX = new am4core.Scrollbar();

			// Add a legend
		// chart.legend = new am4charts.Legend();

		// if (window.innerWidth < 600) {
		// 	chart.legend.position = "top";
		// } else {
		// 	chart.legend.position = "left";
		// }


		// chart.legend.maxWidth = 600;


		chart.legend = new am4charts.Legend();
		chart.legend.useDefaultMarker = true;
		chart.legend.labels.template.truncate = true;
		// chart.legend.labels.template.wrap = true;
		chart.legend.minWidth = 350;

		chart.legend.itemContainers.template.events.on("hit", function(event) {
			console.log(event.target.dataItem.name);
			console.log(event.target.classList)
		});

		console.log(chart.legend)
		// chart.legend.minWidth = 600;

		// if (window.innerWidth < 600) {
		// 	chart.legend.position = "top";
		// } else {
		// 	chart.legend.position = "left";
		// }

		// chart.legend.position = 'absolute'

		// console.log(chart.legend.position)

		/* Remove square from marker template */
		var marker = chart.legend.markers.template;
		marker.disposeChildren();
		marker.width = 40;
		marker.height = 40;

		/* Add custom image instead */
		var flag = marker.createChild(am4core.Image);
		flag.width = 40;
		flag.height = 40;
		flag.verticalCenter = "top";
		flag.horizontalCenter = "left";
		flag.adapter.add("href", function(href, target) {
		  if (target.dataItem && target.dataItem.dataContext && target.dataItem.dataContext.dummyData) {
		    return target.dataItem.dataContext.dummyData.flag;
		  }
		  else {
		    return href;
		  }
		});

		var height = window.innerHeight - 156 - document.getElementById('table-modal').clientHeight

		document.getElementsByClassName('modal-chart-container')[0].style.top = document.getElementById('table-modal').clientHeight + 40 + 'px'
		document.getElementById('chartdiv1').style.height = height + 'px'


		return chart
	}





 	function loadTableData(tableData, init, id) {

 		var table = document.getElementById(id)

 		var theadMedium = table.children[0]
	 	var tbodyMedium = table.children[1]

	 	if (init | tableData['visible'].length > 1) {
	 		// console.log('slkfhlskjfhsjkd')
	 		while(theadMedium.firstChild) {
		 		theadMedium.removeChild(theadMedium.firstChild)
		 	}
	 	}

	 	while(tbodyMedium.firstChild) {
	 		tbodyMedium.removeChild(tbodyMedium.firstChild)
	 	}


	 	if (!theadMedium.firstChild) {
	 		var yearsHeader = document.createElement('tr')

	 		yearsHeader.insertAdjacentHTML('afterBegin', '<td></td>')

	 		for (yearName in tableData['headers']) {
	 			
	 			if (tableData['visible'].includes(yearName) && tableData['visible'].length > 1) {
	 				var ty = document.createElement('td')
		 			ty.innerText = yearName
		 			ty.classList.add(yearName)
		 			ty.classList.add(id + '-cell')
		 			ty.colSpan = 12

		 			yearsHeader.insertAdjacentHTML('beforeEnd', ty.outerHTML)
	 			}
	 		}

	 		theadMedium.appendChild(yearsHeader)


	 		var head = document.createElement('tr')

	 		if (tableData['visible'].length == 1) {
		 		head.insertAdjacentHTML('afterBegin', '<td><input type="text" id="' + id + '-trigger" placeholder="Year" readonly></td>')
	 		} else {
	 			head.insertAdjacentHTML('afterBegin', '<td></td>')
	 		}

		 	for (y in tableData['headers']) {
		 		for (m in tableData['headers'][y]) {

		 			if (tableData['visible'].includes(y)) {
		 				var th = document.createElement('td')
				 		th.innerText = tableData['headers'][y][m].charAt(0).toUpperCase()
				 		th.classList.add(id + '-cell')
				 		th.classList.add(id + '-' + tableData['headers'][y][m] + '-' + y)
				 		// th.classList.add(tableData['headers'][y][m])

						head.insertAdjacentHTML('beforeEnd', th.outerHTML)
		 			}
				}
		 	}

			theadMedium.appendChild(head)

	 	}

	 	for (row in tableData['data']) {
			var tr = document.createElement('tr')

			var flexCover = document.createElement('div')
			var icon = document.createElement('img')
			var textCover = document.createElement('span')

			flexCover.classList.add('flex-cover')
			textCover.classList.add('text-cover')


			icon.src = tableData['data'][row]['prop']['icon']
			icon.classList.add('row-icon')

			
			textCover.innerText = tableData['data'][row]['prop']['name']
			textCover.style.color = tableData['data'][row]['prop']['color']

			flexCover.insertAdjacentHTML('afterBegin', icon.outerHTML)
			flexCover.insertAdjacentHTML('beforeEnd', textCover.outerHTML)


			var tdCategory = document.createElement('td')
			tdCategory.classList.add('category')
			tdCategory.classList.add('category-' + id)
			tdCategory.classList.add(row)

			tdCategory.insertAdjacentHTML('afterBegin', flexCover.outerHTML)

			tr.insertAdjacentHTML('afterBegin', tdCategory.outerHTML)

			for (year in tableData['data'][row]) {

				if (year != 'prop') {

					for (m in tableData['data'][row][year]) {


						if (tableData['visible'].includes(year)) {
							var td = document.createElement('td')

							td.classList.add(id + '-cell')
							td.classList.add(id + '-' + m + '-' + year)
							td.innerText = tableData['data'][row][year][m]

							td.classList.add(row)

							tr.insertAdjacentHTML('beforeEnd', td.outerHTML)


						}

						


					}

				}

				
			}
			
			tbodyMedium.insertAdjacentHTML('beforeEnd', tr.outerHTML)


		}


		document.getElementsByClassName('table-medium')[0] = table

		if (init) {
 			selectInit(Object.keys(data['headers']), id)
		}

		hoverInit(id)

		if (id == 'table-medium') {
			clickInit()
		}
 	}


 	loadTableData(data, true, 'table-medium')





	// table hover / click effect

	function hoverInit(id) {

		var tds = document.getElementsByClassName(id + '-cell');

		tds.forEach((item) => {
			var category = null
			var month = null
			var year = null

			item.addEventListener('mouseover', () => {
				if (item.classList.length == 3) {

					var yearselector = item.classList[1].split('-')[3]



					month = document.getElementsByClassName(item.classList[1])[0]
					year = document.getElementsByClassName(yearselector)[0]
					category = document.getElementsByClassName(item.classList[2])[0]




					if (item.classList.contains('category')) {
						category = null
					}
				}

				if (category != null && month != null) {
					category.style.backgroundColor = '#af161e';
					category.prevColor = category.style.color
					category.style.color = 'white'
					category.style.opacity = '0.5'

					month.style.backgroundColor = '#af161e';
					month.style.color = 'white'
					month.style.opacity = '0.5'

					item.style.backgroundColor = '#cac5d9'
				}

				if (year && year != null) {
					year.style.backgroundColor = '#e9e6f3';
				}
			})

			item.addEventListener('mouseout', () => {
				if (category != null && month != null) {
					category.style.backgroundColor = 'white';
					category.style.color = category.prevColor
					category.style.opacity = '1'

					month.style.backgroundColor = 'white';
					month.style.color = 'black'
					month.style.opacity = '1'

					item.style.backgroundColor = 'white'
				}

				if (year && year != null) {
					year.style.backgroundColor = 'white';
				}
			})

			if (item.classList.length == 3) {
				item.addEventListener('click', () => {
					// while(document.getElementById('legal-container').firstChild) {
					// 	document.getElementById('legal-container').remove(document.getElementById('legal-container').firstChild)
					// }

					while (document.getElementById('legal-container').firstChild) {
						document.getElementById('legal-container').removeChild(document.getElementById('legal-container').firstChild)
					}

					legalDevs['data'].forEach((leg) => {
						document.getElementById('legal-container').insertAdjacentHTML('beforeEnd', '<li>' + leg['name'] + '</li>')
					})
				})
			}

			// if (item.classList.length == 2) {
			// 	item.addEventListener('click', (ev) => {
			// 		modal.style.display = 'block'

			// 		console.log(ev.target.classList)

			// 	})
			// }

		})


	}

	function clickInit() {
		var categoryModal = document.getElementsByClassName('category-table-medium');
		var modal = document.getElementsByClassName('modal')[0]

		var x = 0;
		var y = 0;

		categoryModal.forEach((item) => {

			item.addEventListener('click', (ev) => {

				document.getElementsByClassName('category-name')[0].innerText = ev.target.innerText
				modal.style.display = 'block'
				loadTableData(modalData, true, 'table-modal');

				x = window.pageXOffset
				y = window.pageYOffset

				window.scrollTo(0, 0)
				document.getElementsByTagName('body')[0].style.overflow = 'hidden'


				chartRender()

			})
		})


			var modalExit = document.getElementsByClassName('exit')[0];

			modalExit.addEventListener('click', () => {
				modal.style.display = 'none'
				document.getElementsByClassName('category-name')[0].innerText = null

				window.scrollTo(x, y)
				document.getElementsByTagName('body')[0].style.overflow = 'visible'
		})

	}

	



	// table expand 

	var buttonExpand = document.getElementsByClassName('table-expand')[0]
	var legals = document.getElementsByClassName('legal-devs')[0]

	buttonExpand.addEventListener('click', () => {
		var cells = document.getElementsByClassName('table-medium-cell')
		var categories = document.getElementsByClassName('category')

		legals.classList.toggle('hide')

		if (buttonExpand.classList.contains('table-expanded')) {
			data['visible'] = ['2016']
			loadTableData(data, true, 'table-medium')

			// cells.forEach((cell) => {
			// 	cell.style.width = '5%'
			// })

			// categories.forEach((category) => {
			// 	category.style.width = '40%'
			// })

			table.style.width = '70%'

			buttonExpand.style.right = '29%'
			buttonExpand.style.transform = 'rotate(0deg)'
			buttonExpand.classList.remove('table-expanded')
		} else {
			data['visible'] = ['2016', '2017', '2018', '2019']
			loadTableData(data, false, 'table-medium')

			cells.forEach((cell) => {
				cell.style.width = '1.8%'
			})

			categories.forEach((category) => {
				category.style.width = '20.8%'
			})

			table.style.width = '98%'


			buttonExpand.style.right = '1px'
			buttonExpand.style.transform = 'rotate(180deg)'
			buttonExpand.classList.add('table-expanded')
		}
	}) 


	// table data toggle
	function selectInit(years, id) {
		var trigger = id + '-trigger'

		var mobileSelect = new MobileSelect({
		    trigger: '#' + trigger,
		    wheels: [
		      {data: years}
		    ],
		    callback: (index, year) => {
		    	document.getElementById(trigger).value = year
		    	data['visible'] = [year.toString()]

		    	// console.log(data['visible'])

		    	if (id == 'table-medium') {
		    		data['visible'] = [year.toString()]
		    		loadTableData(data, false, id)
		    	} else {
		    		modalData['visible'] = [year.toString()]
		    		loadTableData(modalData, false, id)
		    	}
		    }
		});

		// console.log(mobileSelect)

		mobileSelect.ensureBtn.innerHTML = 'select'
		mobileSelect.cancelBtn.innerHTML = 'cancel'
	}

});







