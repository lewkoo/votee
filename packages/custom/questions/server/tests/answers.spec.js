///**
// * Created by Yuriy on 2/11/2016.
// */
//
//var expect = require('expect.js'),
//    request = require('supertest'),
//    mongoose = require('mongoose'),
//    User = mongoose.model('User'),
//    Question = mongoose.model('Question'),
//    Answer = mongoose.model('Answer'),
//    mean = require('meanio'),
//    server = request.agent('http://localhost:' + mean.config.clean.http.port);
//
///**
// * Globals
// */
//
//var professor;
//var question;
//var answer;
//
///**
// * Test Suites
// */
//
//describe('<Unit Test>', function() {
//    describe('Model Question:', function() {
//        beforeEach(function(done){
//            this.timeout(10000);
//
//            professor = new User({
//                name: 'Some professor',
//                email: 'questionProf@university.ca',
//                username: 'number1Prof1972',
//                password: 'youshallnotpass'
//            });
//            professor.save();
//
//            question = new Question({
//                title: 'Test question',
//                description: 'This is a question that has nothing to do with the course material',
//                creator: professor,
//                options: { '0': 'The Hobbit', '1': 'Return of the King', '2': 'Star Wars', '3': 'Bond, James Bond' },
//                answer: "Option3"
//            });
//
//            //TODO: write tests...
//            //answer = new Answer({
//            //    mp_answer: '1',
//            //
//            //});
//
//            done();
//        }); // END of beforeEach
//
//        describe('Method Save', function(){
//
//            it('it should be able to save a question without problems', function(done){
//                this.timeout(10000);
//
//                return question.save(function(err, data){
//                    expect(err).to.be(null);
//                    expect(data.title).to.equal('Test question');
//                    expect(data.description).to.equal('This is a question that has nothing to do with the course material');
//                    expect(data.creator).to.not.equal(null);
//                    expect(data.answer).to.equal('Option3');
//                    expect(data.options).to.not.equal(null);
//                    expect(data.type).to.equal('MULTIPLE-CHOICE');
//                    expect(data.answers.length).to.equal(0);
//                    expect(data.created.length).to.not.equal(0);
//                    done();
//                });
//            });
//
//            it('it should error if the title is empty', function(done){
//                this.timeout(10000);
//                question.title = '';
//                return question.save(function(err, data){
//                    expect(err).to.not.be(null);
//                    done();
//                });
//            });
//
//            it('it should reject unsupported type', function(done){
//
//                this.timeout(10000);
//                question.type = 'foo bar';
//
//                return question.save(function(err, data){
//                    expect(err).to.not.be(null);
//                    done();
//                });
//            });
//
//            it('it should reject a null creator', function(done){
//
//                this.timeout(10000);
//                question.creator = null;
//
//                return question.save(function(err, data){
//                    expect(err).to.not.be(null);
//                    done();
//                });
//            });
//
//            it('it should reject a null options', function(done){
//
//                this.timeout(10000);
//                question.options = null;
//
//                return question.save(function(err, data){
//                    expect(err).to.be(null);
//                    done();
//                });
//            });
//
//            it('it should reject a null answer', function(done){
//
//                this.timeout(10000);
//                question.answer = null;
//
//                return question.save(function(err, data){
//                    expect(err).to.not.be(null);
//                    done();
//                });
//            });
//        }); // END of method save testing
//
//        describe('Testing API to get all questions', function() {
//            it('it should be able to get the list of courses', function (done) {
//                server.get('/api/questions')
//                    .expect('Content-Type', '/json')
//                    .expect(200)
//                    .end(function(err, res){
//                        console.log(err);
//                        done();
//                    });
//            });
//        });
//
//
//        afterEach(function(done) {
//            this.timeout(10000);
//            professor.remove();
//            question.remove();
//            done();
//        });
//
//    }); // END of Course model tests
//}); // END of description of Unit Test Suite