//package com.stackroute.muzix.repositoryTest;
//
//import com.stackroute.muzix.model.Track;
//import com.stackroute.muzix.repository.TrackRepo;
//import com.stackroute.muzix.service.MusicTrackService;
//import com.stackroute.muzix.service.MusicTrackServiceImpl;
//import org.junit.After;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
//import org.springframework.test.context.junit4.SpringRunner;
//
//import java.util.List;
//
//@RunWith(SpringRunner.class)
//@DataJpaTest
//public class RepositoryTests {
//        @Autowired
//        private TrackRepo trackRepo;
//        private Track track;
//
//        @Before
//        public void setUp()
//        {
//            track = new Track(101,"Tack_10","Comment_10");
//        }
//
//        @After
//        public void tearDown(){
//
//            trackRepo.deleteAll();
//        }
//
//
//        @Test
//        public void testSaveUser(){
//            trackRepo.save(track);
//            Track fetchTrack = trackRepo.findById(track.getTrackId()).get();
//            Assert.assertEquals(101,fetchTrack.getTrackId());
//
//        }
//
//        @Test
//        public void testSaveUserFailure(){
//            Track testUser = new Track(111,"Track_11","Comment_11");
//            trackRepo.save(track);
//            Track fetchUser = trackRepo.findById(track.getTrackId()).get();
//            Assert.assertNotSame(testUser, track);
//        }
//
//        @Test
//        public void testGetAllUser(){
//            Track u = new Track(1,"track_1","comment_12");
//            Track u1 = new Track(15,"track_15","comment_13");
//            trackRepo.save(u);
//            trackRepo.save(u1);
//
//            List<Track> list = trackRepo.findAll();
//            Assert.assertEquals("track_1",list.get(0).getTrackName());
//
//        }
//
//
//    }