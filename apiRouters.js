const express = require('express');
const apiController = require('./apiController');

const router = express.Router(); //make it be a middleware
router
  .route('/AgeDistributionOfReportedIndividuals')
  .get(apiController.AgeDistributionOfReportedIndividuals4);
router
  .route('/AlarmTypeAndFinalFeedbackTypeFlowDirection')
  .get(apiController.AlarmTypeAndFinalFeedbackTypeFlowDirection14);
router
  .route('/FlowDirectionOfPoliceStations')
  .get(apiController.FlowDirectionOfPoliceStations11);
router
  .route('/FlowDirectionOfReceivingUnits')
  .get(apiController.FlowDirectionOfReceivingUnits12);
router
  .route('/GenderDistributionOfReportedIndividuals')
  .get(apiController.GenderDistributionOfReportedIndividuals5);
router
  .route('/GenderDistributionOfReportedIndividuals')
  .get(apiController.GenderDistributionOfReportedIndividuals7);
router.route('/MajorAndMinorCategor').get(apiController.MajorAndMinorCategor15);
router
  .route('/MatchingDegreeBetweenAlarmTypeAndFinalFeedbackType')
  .get(apiController.MatchingDegreeBetweenAlarmTypeAndFinalFeedbackType13);
router
  .route('/NumberOfCasesAtPoliceStations')
  .get(apiController.NumberOfCasesAtPoliceStations2);
router
  .route('/NumberOfCasesByTimePeriod')
  .get(apiController.NumberOfCasesByTimePeriod3);
router
  .route('/NumberOfCasesDividedIntoCategories')
  .get(apiController.NumberOfCasesDividedIntoCategories9);
router
  .route('/NumberOfReportedCasesByRegion')
  .get(apiController.NumberOfReportedCasesByRegion1);
router
  .route('/TheDistributionOfVariousTypesOfCaseVenuesOverTime')
  .get(apiController.TheDistributionOfVariousTypesOfCaseVenuesOverTime8);
router
  .route('/TimeTrendOfEachPoliceSituationCategory')
  .get(apiController.TimeTrendOfEachPoliceSituationCategory10);
router
  .route('/TrendOfDailyAlarmCases')
  .get(apiController.TrendOfDailyAlarmCases6);

module.exports = router;
