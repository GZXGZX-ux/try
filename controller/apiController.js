const controllerfactory = require('./controllerfactory');

exports.NumberOfReportedCasesByRegion1 =
  controllerfactory.getone('1分区域报案数量');
exports.NumberOfCasesAtPoliceStations2 =
  controllerfactory.getone('2分派出所案件数量');
exports.NumberOfCasesByTimePeriod3 =
  controllerfactory.getone('3分时间段案件数量');
exports.AgeDistributionOfReportedIndividuals4 =
  controllerfactory.getone('7报案人年龄分布');
exports.GenderDistributionOfReportedIndividuals5 =
  controllerfactory.getone('7报案人性别分布');
exports.TrendOfDailyAlarmCases6 = controllerfactory.getone('8各天报警案件趋势');
exports.DistributionOfVenuesForMajorTypesOfCases7 =
  controllerfactory.getone('9各大类案件场所分布');
exports.TheDistributionOfVariousTypesOfCaseVenuesOverTime8 =
  controllerfactory.getone('10各大类案件场所分布随时间变化趋势');
exports.NumberOfCasesDividedIntoCategories9 =
  controllerfactory.getone('12分大类案件数量');
exports.TimeTrendOfEachPoliceSituationCategory10 =
  controllerfactory.getone('13各警情大类时间趋势');
exports.FlowDirectionOfPoliceStations11 =
  controllerfactory.getone('14各派出所出警地流向');
exports.FlowDirectionOfReceivingUnits12 =
  controllerfactory.getone('17接警单位受警单位流向');
exports.MatchingDegreeBetweenAlarmTypeAndFinalFeedbackType13 =
  controllerfactory.getone('18报警类型与最终反馈类型匹配度');
exports.AlarmTypeAndFinalFeedbackTypeFlowDirection14 =
  controllerfactory.getone('19报警类型与最终反馈类型流向');
exports.MajorAndMinorCategor15 =
  controllerfactory.getone('20各反馈警情大类、小类处理结果');
exports.mapLatitudeAndLongitude = controllerfactory.getone('30经纬度');
exports.theJobOfvictim = controllerfactory.getone('31受害人职业');
exports.BreakdownOfFraudCaseCategories =
  controllerfactory.getone('32诈骗案件类别细分');
