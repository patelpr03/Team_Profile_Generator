const Engineer = require("../lib/Engineer.js");
// jest.mock("../lib/Engineer.js");

test("creates an engineer object", () => {
    const engineer = new Engineer("Yogi", 90, "Yogi@gmail.com", "YogiHub");

    expect(engineer.name).toEqual(String);
    expect(engineer.id).toEqual(Number);
    expect(engineer.email).toEqual(String);
    expect(engineer.github).toEqual(String);
    expect(engineer.role).toEqual(String);
})

test("gets engineer name", () => {
    const engineer = new Engineer("Yogi", 90, "Yogi@gmail.com", "YogiHub");

    expect(engineer.getName()).toBe("Yogi");
});

test("gets engineer id", () => {
    const engineer = new Engineer("Yogi", 90, "Yogi@gmail.com", "YogiHub");

    expect(engineer.getId()).toBe(90);
});

test("gets engineer email", () => {
    const engineer = new Engineer("Yogi", 90, "Yogi@gmail.com", "YogiHub");

    expect(engineer.getEmail()).toBe("Yogi@gmail.com");
});

test("gets engineer role", () => {
    const engineer = new Engineer("Yogi", 90, "Yogi@gmail.com", "YogiHub");

    expect(engineer.getRole()).toBe("Engineer");
    console.log(engineer);
});

test("gets engineer github", () => {
    const engineer = new Engineer("Yogi", 90, "Yogi@gmail.com", "YogiHub");

    expect(engineer.getGithub()).toBe("YogiHub");
})