const express = require('express');
const apiController = require('./apiController');

const router = express.Router(); //make it be a middleware
//报案人年龄分布
router
  .route('/AgeDistributionOfReportedIndividuals')
  .get(apiController.AgeDistributionOfReportedIndividuals4);

//19报警类型与最终反馈类型流向
router
  .route('/AlarmTypeAndFinalFeedbackTypeFlowDirection')
  .get(apiController.AlarmTypeAndFinalFeedbackTypeFlowDirection14);

//14各派出所出警地流向
router
  .route('/FlowDirectionOfPoliceStations')
  .get(apiController.FlowDirectionOfPoliceStations11);

//17接警单位受警单位流向
router
  .route('/FlowDirectionOfReceivingUnits')
  .get(apiController.FlowDirectionOfReceivingUnits12);

//7报案人性别分布
router
  .route('/GenderDistributionOfReportedIndividuals')
  .get(apiController.GenderDistributionOfReportedIndividuals5);

//9各大类案件场所分布
router
  .route('/DistributionOfVenuesForMajorTypesOfCases')
  .get(apiController.DistributionOfVenuesForMajorTypesOfCases7);

//20各反馈警情大类、小类处理结果
router.route('/MajorAndMinorCategor').get(apiController.MajorAndMinorCategor15);

//18报警类型与最终反馈类型匹配度
router
  .route('/MatchingDegreeBetweenAlarmTypeAndFinalFeedbackType')
  .get(apiController.MatchingDegreeBetweenAlarmTypeAndFinalFeedbackType13);

//2分派出所案件数量
router
  .route('/NumberOfCasesAtPoliceStations')
  .get(apiController.NumberOfCasesAtPoliceStations2);

//3分时间段案件数量
router
  .route('/NumberOfCasesByTimePeriod')
  .get(apiController.NumberOfCasesByTimePeriod3);

//12分大类案件数量
router
  .route('/NumberOfCasesDividedIntoCategories')
  .get(apiController.NumberOfCasesDividedIntoCategories9);

//1分区域报案数量
router
  .route('/NumberOfReportedCasesByRegion')
  .get(apiController.NumberOfReportedCasesByRegion1);

//10各大类案件场所分布随时间变化趋势
router
  .route('/TheDistributionOfVariousTypesOfCaseVenuesOverTime')
  .get(apiController.TheDistributionOfVariousTypesOfCaseVenuesOverTime8);

//13各警情大类时间趋势
router
  .route('/TimeTrendOfEachPoliceSituationCategory')
  .get(apiController.TimeTrendOfEachPoliceSituationCategory10);

//8各天报警案件趋势
router
  .route('/TrendOfDailyAlarmCases')
  .get(apiController.TrendOfDailyAlarmCases6);

module.exports = router;
