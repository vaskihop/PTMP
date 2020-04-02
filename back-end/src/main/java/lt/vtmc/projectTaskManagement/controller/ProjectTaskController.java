package lt.vtmc.projectTaskManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lt.vtmc.projectTaskManagement.model.Project;
import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.service.ProjectService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/projects")
public class ProjectTaskController {
	
	@Autowired
	ProjectService projectService;
	
	@GetMapping
	public List<ProjectEntity> getProjects(){
		return projectService.getProjects();
	}
	
	@GetMapping("/{projectId}")
	public ProjectEntity getProjectById(@PathVariable Long projectId) {
		return projectService.findProjecttById(projectId);
	}
	
	@PostMapping
	public void addProject(@RequestBody Project project) {
		projectService.addProject(project);
	}
	
	@DeleteMapping("/{projectId}")
	public void deleteProject(@PathVariable Long projectId) {
		projectService.deleteProject(projectId);
	}
	
	@PutMapping("/{projectId}")
	public void updateProject(@PathVariable Long projectId, @RequestBody Project project) {
		projectService.updateArtist(projectId, project);
	}

}
