"use strict";


let studentArray = [];
let studentWrapper = document.querySelector('#showStudentHere');

function Student(ad, soyad, kuce, seher) {
    this.name = ad;
    this.surname = soyad;
    this.street = kuce;
    this.city = seher
}

function addStudent(ad , soyad , kuce , seher){
    let name = document.getElementById('nameIn').value;
    let surname = document.getElementById('surnameIn').value;
    let street = document.getElementById('streetIn').value;
    let city = document.getElementById('cityIn').value;


    let newStudent = new Student(name, surname, street, city);

    studentArray.push(newStudent);
    displayNames();
    
}

function displayNames() {
    let list = "<h4 class='text-center'>Students List</h4>"
    list += "<ol class='list-group'>";
    for (let i = 0; i < studentArray.length; i++) {
        list += "<li class='list-group-item'>" +
            studentArray[i].name + " " +
            studentArray[i].surname + " - " + studentArray[i].street
            + " " + studentArray[i].city + "</li>";
    }
    list += "</ol>";
    studentWrapper.innerHTML = list;
}


let roomArray = [];
let roomWrapper = document.querySelector('#showRoomsHere');


function Room(otagAdi, tutum){
    this.roomName = otagAdi;
    this.capacity = tutum;
}

function addRoom(otagAdi, tutum){
    let roomName = document.getElementById('roomName').value;
    let capacity = document.getElementById('capacityIn').value;

    let newRoom = new Room(roomName,capacity);

    roomArray.push(newRoom);
    displayRooms();
}


function displayRooms() {
    let myList = " "
    myList += "<ul class='myList-group'>";
    for (let i = 0; i < roomArray.length; i++) {
        myList += "<li class='myList-group-item'>" + 
        roomArray[i].roomName + "-" + roomArray[i].capacity
        + "</li>";
    }
    myList += "</ul>";
    roomWrapper.innerHTML = myList;
}