import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.MessageRepository;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class GetMessageController {

    @Autowired
    private MessageRepository repo;

}