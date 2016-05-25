// import Q from 'q';

const AssessmentService = {
  parseResult(resultString, ifSuccess, ifError) {
    // i'd like to use a monad here...
    try {
      return ifSuccess(JSON.parse(resultString));
    } catch(e) {
      console.log('got err:', e);
      return ifError(e);
    }
  }
};

export default AssessmentService;
