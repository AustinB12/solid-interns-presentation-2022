class Square {
  constructor(length) {
    this.length = length;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

class ContactGroup {
  constructor(contacts, groupName) {
    this.contacts = contacts;
    this.groupName = groupName;
  }
}
