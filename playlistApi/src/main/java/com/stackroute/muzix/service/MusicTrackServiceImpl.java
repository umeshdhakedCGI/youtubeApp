package com.stackroute.muzix.service;

import com.stackroute.muzix.exception.TrackAlreadyExistsException;
import com.stackroute.muzix.exception.TrackNotFoundException;
import com.stackroute.muzix.model.Video;
import com.stackroute.muzix.repository.TrackRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicTrackServiceImpl implements MusicTrackService {

    private TrackRepo trackRepo;
    @Autowired
    public MusicTrackServiceImpl(TrackRepo trackRepo) {
        this.trackRepo = trackRepo;
    }

    @Override
    public Video saveTrack(Video video) throws TrackAlreadyExistsException {
        Video video1 = new Video();
        int trackId = video.getVideoId();
//        if (!trackRepo.existsById(trackId)) {
//            trackRepo.save(video);
//        } else {
//            throw new TrackAlreadyExistsException("Track Already Exist");
//        }
        trackRepo.save(video);
       return video1;
    }

    @Override
    public List<Video> getAllTrack() throws TrackNotFoundException {
        List<Video> videos = trackRepo.findAll();
        if (videos.size() == 0) {
            throw new TrackNotFoundException("There are no Tracks in your List");
        }

        return videos;
    }

    @Override
    public Video removeTrack(int trackId) throws TrackNotFoundException {
        Video video = new Video();
        if (trackRepo.existsById(trackId)) {
           video = trackRepo.findById(trackId).get();
      //  System.out.println(video);
           trackRepo.deleteById(trackId);
        } else {
            throw new TrackNotFoundException("Track not found");
        }
            return video;
    }

    @Override
    public void updateTrackComment(Video video) throws TrackNotFoundException {
        //    trackRepo.findAll();
        Video video1;

        if (trackRepo.existsById(video.getVideoId())) {
            video1 = trackRepo.findById(video.getVideoId()).get();
            video1.setVideoDescription(video.getVideoDescription());
            trackRepo.save(video1);
        } else {
            throw new TrackNotFoundException("Track not found");
        }
    }

    @Override
    public List<Video> trackByName(String title) throws TrackNotFoundException {


        List<Video> videos = trackRepo.findVideoByVideoTitle(title);
        System.out.println("here"+ videos.size());
//        if (videos.size() == 0) {
//
//            throw new TrackNotFoundException("there is No Video titled : " + title);
//        }

            return videos;

    }

}
