const { promisify } = require('util');
const pool = require('./db');

exports.NumberOfReportedCasesByRegion1 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `1分区域报案数量`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.NumberOfCasesAtPoliceStations2 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `2分派出所案件数量`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.NumberOfCasesByTimePeriod3 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `3分时间段案件数量`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.AgeDistributionOfReportedIndividuals4 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `7报案人年龄分布`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.GenderDistributionOfReportedIndividuals5 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `7报案人性别分布`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.TrendOfDailyAlarmCases6 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `8各天报警案件趋势`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.DistributionOfVenuesForMajorTypesOfCases7 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `9各大类案件场所分布`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.TheDistributionOfVariousTypesOfCaseVenuesOverTime8 = async (
  req,
  res,
  next
) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query(
      'SELECT *  FROM  `10各大类案件场所分布随时间变化趋势`'
    );
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.NumberOfCasesDividedIntoCategories9 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `12分大类案件数量`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.TimeTrendOfEachPoliceSituationCategory10 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `13各警情大类时间趋势`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.FlowDirectionOfPoliceStations11 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `14各派出所出警地流向`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.FlowDirectionOfReceivingUnits12 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query('SELECT *  FROM  `17接警单位受警单位流向`');
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.MatchingDegreeBetweenAlarmTypeAndFinalFeedbackType13 = async (
  req,
  res,
  next
) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query(
      'SELECT *  FROM  `18报警类型与最终反馈类型匹配度`'
    );
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.AlarmTypeAndFinalFeedbackTypeFlowDirection14 = async (
  req,
  res,
  next
) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query(
      'SELECT *  FROM  `19报警类型与最终反馈类型流向`'
    );
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
exports.MajorAndMinorCategor15 = async (req, res, next) => {
  try {
    const query = promisify(pool.query).bind(pool);
    const result = await query(
      'SELECT *  FROM  `20各反馈警情大类、小类处理结果`'
    );
    res.status(200).json({
      status: 'success',
      results: result.length,
      data: { results: result },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
