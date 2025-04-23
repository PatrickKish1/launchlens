export const calculateResults = (answers, questions) => {
    // More sophisticated scoring logic can go here
    const scores = {
      diy: 0,
      outsource: 0,
      team: 0
    };
    
    // Weight questions differently if needed
    answers.forEach((answer, index) => {
      const question = questions[index];
      
      // Add your scoring logic here
      if (['solo', 'self', 'minimal'].includes(answer)) scores.diy += 1;
      if (['part-time', 'guidance', 'mid'].includes(answer)) scores.outsource += 1;
      if (['team', 'handled', 'premium'].includes(answer)) scores.team += 1;
      
      // Special cases - for example, if they're overwhelmed but have a team
      if (question.id === 5 && answer === 'overwhelmed') scores.outsource += 0.5;
    });
    
    // Determine recommendation
    const maxScore = Math.max(...Object.values(scores));
    const recommendation = Object.keys(scores).find(key => scores[key] === maxScore);
    
    return {
      recommendation,
      scores,
      details: "Additional insights about your business needs could go here"
    };
  };