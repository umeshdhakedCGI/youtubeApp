package com.stackroute.muzix.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Videos")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Video {

    //@Id
    private int videoId;
    private String videoLink;
    private String videoTitle;
    private String videoDescription;
    private String videoImage;
}
