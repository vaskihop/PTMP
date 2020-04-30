package lt.vtmc.projectTaskManagement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lt.vtmc.projectTaskManagement.model.Project;
import lt.vtmc.projectTaskManagement.model.ProjectEntity;
import lt.vtmc.projectTaskManagement.repository.ProjectRepository;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	private ProjectRepository repo;

	@Override
	public List<Project> getProjects() {
		List<Project> projectList=new ArrayList<Project>();
		
		repo.findAll().forEach(projectEntity->projectList.add(new Project(projectEntity)));
		return projectList;
	}

	@Override
	public void addProject(Project project) {		
		repo.save(new ProjectEntity(project));

	}

	@Override
	public void deleteProject(Long projectId) {
		repo.deleteById(projectId);

	}

	@Override
	public Project findProjecttById(Long projectId) {
		ProjectEntity projectFromDB=findProjectById(projectId);
		return new Project(projectFromDB);
	}

	@Override
	public void updateProject(Long projectId, Project project) {
		ProjectEntity updatedProject=findProjectById(projectId);
		updatedProject.updateProject(project);
		repo.save(updatedProject);
	}
	
	public ProjectEntity findProjectById(Long projectId) {
//		kada nors mes exception
		return repo.findById(projectId).orElse(null);
	}
	
	@Override
	public List<Project> findProjectsByTitle(String title) {
		List<Project> projectList=new ArrayList<Project>();
		repo.findProjectEntityByProjectTitleContainsIgnoreCase(title).forEach(projectEntity->projectList.add(new Project(projectEntity)));
		return projectList;
	}

}
