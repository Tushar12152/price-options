import { LineChart as Lchart, Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const mathMarksData=[
        {"name": "Student 1", "mathMarks": 85, "physicsMarks": 78, "chemistryMarks": 90},
        {"name": "Student 2", "mathMarks": 75, "physicsMarks": 70, "chemistryMarks": 85},
        {"name": "Student 3", "mathMarks": 90, "physicsMarks": 92, "chemistryMarks": 88},
        {"name": "Student 4", "mathMarks": 60, "physicsMarks": 55, "chemistryMarks": 75},
        {"name": "Student 5", "mathMarks": 70, "physicsMarks": 68, "chemistryMarks": 72},
        {"name": "Student 6", "mathMarks": 95, "physicsMarks": 90, "chemistryMarks": 96},
        {"name": "Student 7", "mathMarks": 80, "physicsMarks": 85, "chemistryMarks": 78},
        {"name": "Student 8", "mathMarks": 65, "physicsMarks": 72, "chemistryMarks": 80},
        {"name": "Student 9", "mathMarks": 75, "physicsMarks": 80, "chemistryMarks": 85},
        {"name": "Student 10", "mathMarks": 88, "physicsMarks": 82, "chemistryMarks": 90}
      ]
      
      
    return (
        <div>
               <Lchart width={400} height={100} data={mathMarksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
    <Line type="monotone" dataKey="mathMarks" stroke="red" />
    <Line dataKey="physicsMarks" stroke='violet'></Line>

  </Lchart>
        </div>
    );
};

export default LineChart;