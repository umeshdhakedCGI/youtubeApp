package com.stackroute.muzix.controller;

import com.stackroute.muzix.exception.TrackAlreadyExistsException;
import com.stackroute.muzix.exception.TrackNotFoundException;
import com.stackroute.muzix.model.Video;
import com.stackroute.muzix.service.MusicTrackService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@ControllerAdvice
@RestController
@RequestMapping("videos")
@Api("Track CRUD Operation API")
public class MusicTrackController {

    private MusicTrackService musicTrackService;
    @Autowired
    public MusicTrackController(MusicTrackService musicTrackService)
    {
        this.musicTrackService = musicTrackService;
    }

    int ida =0;
    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Saving Track Detail")
    @PostMapping("video")
    public ResponseEntity<?> saveHandler(@RequestBody Video video) throws TrackAlreadyExistsException {
        ResponseEntity responseEntity;
        musicTrackService.saveTrack(video);
        responseEntity = new ResponseEntity<String>("Successful Created", HttpStatus.CREATED);
        //response.sendRedirect("/index.html");
        return responseEntity;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Reading Tracks Detail")
    @GetMapping("video")
    private ResponseEntity<?> displayHandler() throws TrackNotFoundException {

        return new ResponseEntity<List<Video>>(musicTrackService.getAllTrack(), HttpStatus.OK);

    }

    @ApiOperation(value = "Deleting Track")
    @DeleteMapping("video")
    private ResponseEntity<?> deleteHandler(@RequestBody Video video) throws TrackNotFoundException {
        ResponseEntity responseEntity;

        responseEntity = new ResponseEntity<String>(musicTrackService.removeTrack(video.getVideoId()) + "Is deleted", HttpStatus.OK);
        return responseEntity;
    }

    @ApiOperation(value = "Updating Track Comment")
    @PutMapping("video")
    private ResponseEntity<?> updateHandler(@RequestBody Video video) throws TrackNotFoundException {
        ResponseEntity responseEntity;

        musicTrackService.updateTrackComment(video);
        responseEntity = new ResponseEntity<List<Video>>(musicTrackService.getAllTrack(), HttpStatus.OK);
        return responseEntity;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @ApiOperation(value = "Finding Track Detail by Name")
    @PutMapping("byTitle")
    private ResponseEntity<?> findByTitleHandler(@RequestBody Video video) throws TrackNotFoundException {
        ResponseEntity responseEntity;
        System.out.println("called = "+ video.getVideoTitle());
        responseEntity = new ResponseEntity<List<Video>>(musicTrackService.trackByName(video.getVideoTitle()), HttpStatus.OK);
        return responseEntity;
    }


}
