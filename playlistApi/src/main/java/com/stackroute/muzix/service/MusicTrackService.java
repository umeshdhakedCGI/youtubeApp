package com.stackroute.muzix.service;

import com.stackroute.muzix.exception.TrackAlreadyExistsException;
import com.stackroute.muzix.exception.TrackNotFoundException;
import com.stackroute.muzix.model.Video;

import java.util.List;

public interface MusicTrackService {
    Video saveTrack(Video video) throws TrackAlreadyExistsException;
    List<Video> getAllTrack() throws TrackNotFoundException;
    Video removeTrack(int trackId) throws TrackNotFoundException;
    void updateTrackComment(Video video) throws TrackNotFoundException;
    List<Video> trackByName(String name) throws TrackNotFoundException;
}
