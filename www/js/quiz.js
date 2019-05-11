var allQuestions = [{
    question: 'In Article I, Which Section says that every student shall observe the laws of the land?',
    choices: ['Section I', 'Section II', 
  'Section III', 'Section IV'],
    correctAnswer: 0
},
{
    question: 'Each student must wear his/her _______ in Campus and must present this to the Security Guards when entering the University or campus he/she enrolled.',
    choices: ['Headset', 'ID Card', 'Earings', 'Infinity Guanlet'],
    correctAnswer: 1
},
{
    question: 'If a student loses his/her ID card, he/she should apply for a new one accompanied by an what?',
    choices: ['Affidavit of loss', 'Affidavit of loss', 'Affidavit of loss', 'Affidavit of losser'],
    correctAnswer: 0
},
{
    question: 'In Article II, each semester shall consist of at least how many weeks of Class work in the summer session shall be equivalent to class work of one semester?',
    choices: ['18', '19', '20', '21'],
    correctAnswer: 0
},
{
    question: 'Temporary Enrolment. Temporary enrolment shall be granted to every student-transferee and new students for a period of one how many semestral term in cases where submitted admission requirements are incomplete.?',
    choices: ['2', '4', '1', '3'],
    correctAnswer: 2
},
{   
    question: 'Foreign Students must meet all the prescribed ___________ of the University and the course applied for.',
    choices: ['admission test', 'admission fee', 'admission requirements'],
    correctAnswer: 2
},
{   
    question: 'Sports and other related Activities, the cash incentives for regional level (Individual First Place)',
    choices: ['P1,000', 'P5,000', 'P3,000', 'P2,000'],
    correctAnswer: 3
},
{   
    question: 'What Section in Artivle IV says that It is the responsibility of the Coordinator of Student Services to supervise and regulate the establishment, operation and activities of duly recognized student organization in cooperation with and/or through the campus student council, for the purpose of providing guidelines for the attainment of their goals and objectives as embodied in the constitution and by-laws.',
    choices: ['Section 1', 'Section 2', 'Section 3','Section 4'],
    correctAnswer: 2
},
{   
    question: 'What FSG stand for?',
    choices: ['Federation of School Government', 'Federation of Student Group', 'Federation of Students Groups','Federation of Special Group'],
    correctAnswer: 0
},

{   
    question: 'What SSC stand for?',
    choices: ['Supreme Student Cools', 'Supreme Student Councils', 'School Student Councils','Super Student Councils'],
    correctAnswer: 1
},
{   
    question: 'In Article V, What section says that The selected editor-in-chief aside from being the top notcher in the Editorial Board Examination must also have at least one year experience in the student publication.',
    choices: ['Section 3', 'Section 2', 'Section 1','Section 4'],
    correctAnswer: 0
},
{   
    question: 'In Article V, All the other members of the editorial board need not have prior experience from the publications. Passing the Editorial Board Examination shall be the only requirement.',
    choices: ['Section 2', 'Section 4', 'Section 6','Section 8'],
    correctAnswer: 1
},
{   
    question: 'In Article V, The Editorial Board and staff shall publish two or three issues in an academic year which may include any of the following: literary folio, magazine, newsletter, broadsheet and tabloid. Flash issues will also be published when deemed necessary.',
    choices: ['Section 7', 'Section 9', 'Section 6','Section 8"'],
    correctAnswer: 0
},
{   
    question: 'Article VI, This service provides students with information they need for proper adjustment and decision-making.',
    choices: ['Information service', 'Information record', 'Information data','Information statement'],
    correctAnswer: 0
},
{   
    question: 'The dynamic personal interaction between a counselor and counselee(s), where the counselor employs methods, approaches or techniques to enhance the counselee(s) intrapersonal and interpersonal development and competencies.',
    choices: ['Counseling System', 'Counseling Stem', 'Counseling School','Counseling Service'],
    correctAnswer: 3
},
{   
    question: 'The tapping of agencies, organizations or individuals that may be of better assistance in the counselees resolution of problems and attainment of full potential.',
    choices: ['Referral Service', 'Referral Code', 'Referral Codes','Referral Coder'],
    correctAnswer: 0
},
{   
    question: 'Article VII, The library is open from what time from Mondays thru Fridays.',
    choices: ['8AM to 5:00PM', '8AM to 6:00PM', '8AM to 7:00PM','8AM to 8:00PM'],
    correctAnswer: 0
},
{   
    question: 'Article VII, The Library ID Card serves as the pass in the use of libraries and their resources. The NO LIBRARY ID, NO ENTRY is strictly enforced. The libran ID card is presented upon entrance and every time a book or a material borrowed.',
    choices: ['Section 13', 'Section 12', 'Section 11','Section 14'],
    correctAnswer: 1
},
{   
    question: 'The library ID card is non-transferable. Library cars should not be used by everyone except the student whose picture and name appears on the card. The owner of the ID card is responsible for all materials borrowed on it.',
    choices: ['Section 15', 'Section 13', 'Section 14','Section 12'],
    correctAnswer: 1
},
{   
    question: 'Article VIII, The Medical - Dental Clinic of the University is presently located at the PSU - Main Campus, Lingayen, Pangasinan. It is manned by a University Physician, University Dentist, and a nurse. However some campuses of the University have their respective nursed to provide medical consultation and treatment daily at the clinic.',
    choices: ['Section 1', 'Section 2'],
    correctAnswer: 0
},
{   
    question: 'Article VIII, First dosage of medicines is given free as long as stocks are available. Medical examination of athletes is done prior to athletic events. The medical staff also attends to emergencies encountered during sports competitions. Dental extractions and prophylaxis are included in the dental services',
    choices: ['Section 1', 'Section 2'],
    correctAnswer: 1
},
{   
    question: 'Article IX, All PSU College students are enrolled in a group insurance plan Medical, burial and death benefits are given to students who meet accidents whether inside or outside of the University/Campus premises within the period of coverage',
    choices: ['Section 1', 'Section 2', 'Section 3','Section 4'],
    correctAnswer: 0
},
{   
    question: 'Benifit amount of Accidental Death&Permanent Disablement',
    choices: ['P30,000', 'P50,000', 'P40,000','P20,000'],
    correctAnswer: 1
},
{

    question: 'In Artcle III, full tuition waiver and a stipend of Php 1,500 for Valedictorian from recognized public or private secondary institutions for the first semester with GPA of not lower than ____, provided they come from graduating class of at least fifty (50) students',
    choices: ['85', '86', '87', '88'],
    correctAnswer: 0

}];

var numberOfQuestions = 10;
var chosenQuestions = [];

(function(){
  if (numberOfQuestions > allQuestions.length)
    numberOfQuestions = allQuestions.length;
    
  while (chosenQuestions.length < numberOfQuestions){
    var rand = Math.floor(Math.random()*allQuestions.length);
    if (chosenQuestions.indexOf(rand) == -1) 
      chosenQuestions.push(rand);
  }

  for(var i = 0; i<chosenQuestions.length; i++){
    var chosen = +chosenQuestions[i];
    document.getElementById("quizForm").innerHTML += '<h3>'+(i+1)+'. '+allQuestions[chosen].question+'</h3>';
    for(var j = 0; j<allQuestions[chosen].choices.length; j++){
      document.getElementById("quizForm").innerHTML +=
      '<input type="radio" name=q'+i+' value='+j+' id=q'+i+j+'>' +allQuestions[chosen].choices[j]+'<br>';
    }
  }
  document.getElementById("quizForm").innerHTML +='<br><br><input type="submit" value="SUBMIT ANSWERS">'  
})();

function submitAnswers(){
  var total = chosenQuestions.length;
  var score = 0;
  var answers = [];

  //Get User Input
  for(var i = 0; i<total; i++){
    answers.push(document.forms["quizForm"]["q"+i].value);
  }
  
  //Validation
  for(i = 0; i<total;i++){
    if(answers[i]==null || answers[i] == ''){
      alert('You missed question no. ' +(i+1));
      return false;
    }   
  }
  
  //Correct Answes
  for(i = 0; i<total;i++){
    if(answers[i]==allQuestions[chosenQuestions[i]].correctAnswer)
      score++;
  }
  var results = document.getElementById('results');
  results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
  alert('You scored '+score+' out of ' +total);
  return false;
}