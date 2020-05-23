class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(student) {
        const studentAlreadyRegistered = this.student.filter(
            (s) => s.email === student.email
            ).length;

        if (studentAlreadyRegistered) {
            console.log(`The student with ${student.email} is already registered`);
    }

        else {
            this.student.push(student);
            console.log(`${student.email} is registered to ${this.name}`);
    }
        return this.students;
   
    }
}